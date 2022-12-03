const fs = require("fs");

const rawFile = fs.readFileSync(__dirname + '/input.txt',{encoding:'utf8'});

let packs = rawFile.match(/(?:.*\n){2}.*(?:\n|$)/g).map(x => x.match(/(.*)\n/g)).map(x => x.map(y => y.replace(/\n/, "")))

let prioritySum = 0;

for (let rucksacks of packs) {
    let firstMatchLetters = rucksacks[1].match(new RegExp(`[${rucksacks[0]}]`, "g")).join("")
    let letter = rucksacks[2].match(new RegExp(`[${firstMatchLetters}]`))[0]
    let points = (letter === letter.toUpperCase()) ? letter.charCodeAt(0)-38 : letter.charCodeAt(0)-96
    prioritySum += points;
}

console.log(prioritySum)