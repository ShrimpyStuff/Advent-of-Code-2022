import fs from "fs";

const rawFile = fs.readFileSync('./1/input.txt',{encoding:'utf8'});

export function solution() {
    let elfs = rawFile.split(/^\n/gm)
    elfs = elfs.map(x => x.split(/\n/gm))

    let mostWealthyElf = 0;

    for (let elf of elfs) {
        let wealth = 0;
        for (let itemWeight of elf) {
            itemWeight = parseInt(itemWeight);
            if (!Number.isNaN(itemWeight)) {
                wealth += itemWeight;
            }
        }
        if (wealth > mostWealthyElf) mostWealthyElf = wealth;
    }

    return mostWealthyElf;
}

solution();