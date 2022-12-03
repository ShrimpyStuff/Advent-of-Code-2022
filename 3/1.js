const fs = require("fs");

const rawFile = fs.readFileSync('input.txt',{encoding:'utf8'});

let packs = rawFile.split(/\n/gm).map(x => [x.substring(0, x.length/2), x.substring(x.length/2)])

for (let rucksack of packs) {
    rucksack;
}
