import fs from "fs";

const rawFile = fs.readFileSync('./7/input.txt',{encoding:'utf8'}).trim();

class TreeNode {
    constructor(value, descendants = [], parent = null) {
        this.value = value;
        this.descendants = Array.from(descendants);
        this.parent = parent;
    }

    insertChild(descendants) {
        this.descendants.push(descendants)
        descendants.parent = this;
    }
}

export function solution() {
    let ok = new TreeNode("ok")
    let ok1 = new TreeNode("ok1", "a")
    ok.insertChild(ok1);
    console.log(ok)
}

solution();