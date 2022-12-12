import fs from "fs";

const rawFile = fs.readFileSync('./8/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    const trees = rawFile.split(/\n/gm).map(x => x.split(""))
    let visibleTrees = 0;

    for (let loopy = 0; loopy < trees.length; loopy++) {
        for (let loopx = 0; loopx < trees.length; loopx++) {
            checkTrees(loopy, loopx)
        }
    }

    function checkTrees(treey, treex) {
        let directions = {up: false, down: false, left: false, right: false}
        let yindex = 0;
        let xindex = 0;
        for (let Y of trees) {
            if (Y[treex] >= trees[treey][treex]) {
                if (yindex < treey) {
                    directions.up = true;
                }
                if (yindex > treey) {
                    directions.down = true;
                }
            }
            yindex++;
        }
        for (let X of trees[treey]) {
            if (X >= trees[treey][treex]) {
                if (xindex < treex) {
                    directions.left = true;
                }
                if (xindex > treex) {
                    directions.right = true;
                }
            }
            xindex++;
        }
        if (Object.values(directions).includes(false)) {
            visibleTrees++;
        }
    }

    return visibleTrees;
}

solution();