import fs from "fs";

const rawFile = fs.readFileSync('./7/input.txt',{encoding:'utf8'}).trim();

class TreeNode {
    constructor(value, descendants = [], parent = null, size = null) {
        this.value = value;
        this.descendants = Array.from(descendants);
        this.parent = parent;
        this.size = size;
        if (this.size) {
            this.addSizetoParent(this.size)
        }
    }

    insertChild(descendants) {
        this.descendants.push(descendants)
        descendants.parent = this;
    }
    
    addSizetoParent(size) {
        if (this.parent) {
            this.parent.size += size
            this.parent.addSizetoParent(size)
        }
    }
}

export function solution() {
    let lines = rawFile.split(/\n/gm)
    let currentDirectory;
    for (let line of lines) {
        let fileSizematch = line.match(/([0-9]+) ([a-zA-Z.]+)/);
        if (line.startsWith('$ cd')) {
            let directory = line.slice(5)
            switch (directory) {
                case "..":
                    currentDirectory = currentDirectory.parent;
                    console.log("..", currentDirectory.value)
                    break;
                default:
                    let node = new TreeNode(directory);
                    if (currentDirectory) {
                        currentDirectory.insertChild(node)
                    }
                    currentDirectory = node;
                    console.log(currentDirectory.value, (currentDirectory.parent) ? currentDirectory.parent.value : currentDirectory.parent);
                    break;
            }
        } else if (fileSizematch) {
            let file = new TreeNode(fileSizematch[2], undefined, currentDirectory, parseInt(fileSizematch[1]))
            currentDirectory.insertChild(file)
        }
    }
}

solution();