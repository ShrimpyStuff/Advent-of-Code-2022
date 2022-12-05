import fs from "fs";

const rawFile = fs.readFileSync('./4/input.txt',{encoding:'utf8'});

export function solution() {
    let pairs = rawFile.trim().split(/\n/gm).map(x => x.split(",")).map(x => x.map(y=> y.split("-")))

    let overlaps = 0;

    for (let pair of pairs) {
        let start1 = parseInt(pair[0][0])
        let end1 = parseInt(pair[0][1])
        let start2 = parseInt(pair[1][0])
        let end2 = parseInt(pair[1][1])
        
        if ((start1 >= start2 && end1 <= end2) || (start2 >= start1 && end2 <= end1)) {
            overlaps++;
        }
    }

    return overlaps;
}

solution();