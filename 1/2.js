import fs from "fs";

const rawFile = fs.readFileSync('./1/input.txt',{encoding:'utf8'});;

export function solution() {
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
        mostWealthyElves.sort(function(a, b){return b-a});
        if (wealth > mostWealthyElves[2])  {
            mostWealthyElves.push(wealth);
            mostWealthyElves.sort(function(a, b){return b-a});
            mostWealthyElves.pop();
        }
    }

    totalCalories = mostWealthyElves.reduce((a, b) => a + b, 0)
    return totalCalories;
}

solution();