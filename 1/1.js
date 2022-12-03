const fs = require("fs");

const rawFile = fs.readFileSync(__dirname + '/input.txt',{encoding:'utf8'});;

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

console.log(mostWealthyElf)