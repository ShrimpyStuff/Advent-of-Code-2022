const fs = require("fs");

const rawFile = fs.readFileSync('input.txt',{encoding:'utf8'});;

let elves = rawFile.split(/^\n/gm)
elves = elves.map(x => x.split(/\n/gm))

let totalCalories = 0;
let mostWealthyElves = [0, 0, 0];


for (let elf of elves) {
    let wealth = 0;
    for (let itemWeight of elf) {
        itemWeight = parseInt(itemWeight);
        if (!Number.isNaN(itemWeight)) {
            wealth += itemWeight;
        }
    }
    if (wealth > Math.min(mostWealthyElves)) mostWealthyElves[1] = wealth;
}

console.log(mostWealthyElves)