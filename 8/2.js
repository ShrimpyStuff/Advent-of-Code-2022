import fs from "fs";

const rawFile = fs.readFileSync('./8/input.txt',{encoding:'utf8'}).trim();

export function solution() {
    const trees = rawFile.split(/\n/gm).map(x => x.split(""))
    let highestScenicScore = 0;

    for (let loopy = 0; loopy < trees.length; loopy++) {
        for (let loopx = 0; loopx < trees.length; loopx++) {
            checkTrees(loopy, loopx)
        }
    }

    function checkTrees(treey, treex) {
        let direction = {up: 0, down: 0, left: 0, right: 0}
        let uarray = [];
        let darray = [];
        let larray = [];
        let rarray = [];

        for (let index = 0; index < trees.length; index++) {
            if (parseInt(trees[index][treex]) >= parseInt(trees[treey][treex])) {
                if (index > treey) {
                    darray.push(index)
                }
                if (index < treey) {
                    uarray.push(index)
                }
            }

            if (parseInt(trees[treey][index]) >= parseInt(trees[treey][treex])) {
                if (index > treex) {
                    rarray.push(index)
                }
                if (index < treex) {
                    larray.push(index)
                }
            }
        }
        
        uarray = uarray.map(x => Math.abs(x-treey)).sort((a,b) => a-b)
        darray = darray.map(x => Math.abs(x-treey)).sort((a,b) => a-b)
        larray = larray.map(x => Math.abs(x-treex)).sort((a,b) => a-b)
        rarray = rarray.map(x => Math.abs(x-treex)).sort((a,b) => a-b)
        
        direction.up += uarray[0] || treey
        direction.down += darray[0] || 98-treey
        direction.left += larray[0] || treex
        direction.right += rarray[0] || 98-treex
        if (highestScenicScore < Object.values(direction).reduce((a,b) => a*b)) {
            highestScenicScore = Object.values(direction).reduce((a,b) => a*b);
        }
    }

    return highestScenicScore;
}

solution();