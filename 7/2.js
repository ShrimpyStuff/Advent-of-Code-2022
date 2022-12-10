import fs from "fs";

const rawFile = fs.readFileSync('./7/input.txt',{encoding:'utf8'}).trim();

class TreeNode {
    constructor(value, descendants = [], parent = null, size = null) {
        this.value = value;
        this.descendants = Array.from(descendants);
        this.parent = parent;
        this.size = size;
    }

    insertChild(descendants) {
        this.descendants.push(descendants)
        descendants.parent = this;
    }
}

export function solution() {
    let lines = rawFile.split(/\n/gm)
    let sizes = 0;
    let currentDirectory;

    for (let line of lines) {
        let fileSizematch = line.match(/([0-9]+) ([a-zA-Z.]+)/);
        if (line.startsWith('$ cd')) {
            let directory = line.slice(5)
            switch (directory) {
                case "..":
                    currentDirectory = currentDirectory.parent;
                    break;
                default:
                    let node = new TreeNode(directory);
                    if (currentDirectory) {
                        currentDirectory.insertChild(node)
                    }
                    currentDirectory = node;
                    break;
            }
        } else if (fileSizematch) {
            let file = new TreeNode(fileSizematch[2], undefined, currentDirectory, parseInt(fileSizematch[1]))
            currentDirectory.insertChild(file)
        }
    }
    while (currentDirectory.parent) {
        currentDirectory = currentDirectory.parent
    }

    function dirSize(dir, everyDirFunc) {
        if (dir.size) return dir.size;

        let size = dir.descendants.map(x => dirSize(x, everyDirFunc)).reduce((a, b) => a + b)

        everyDirFunc(size);
        return size;
    }

    let dirs = [];
    let currentSize = dirSize(currentDirectory, size => {dirs.push(size)})
    dirs.sort((a, b) => (a-b));
    const sizeNeeded = 30_000_000 - (70_000_000 - currentSize)

    return dirs.find(dirSize => dirSize >= sizeNeeded);
    
}

solution();