import fs from "fs";

const rawFile = fs.readFileSync('./3/input.txt',{encoding:'utf8'});

export function solution() {
    let packs = rawFile.split(/\n/gm).map(x => [x.substring(0, x.length/2), x.substring(x.length/2)])
    packs.pop()

    let prioritySum = 0;

    for (let rucksack of packs) {
        let matchedLetter = '';
        let string1 = rucksack[0]
        for (let letter of rucksack[1])
        {
            if (string1.includes(letter)) {
                matchedLetter = letter;
                break;
            }
        }
        let points = (matchedLetter === matchedLetter.toUpperCase()) ? matchedLetter.charCodeAt(0)-38 : matchedLetter.charCodeAt(0)-96
        prioritySum += points;
    }

    return prioritySum;
}

solution();