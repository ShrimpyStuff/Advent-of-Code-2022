import fs from "fs";

const rawFile = fs.readFileSync('./6/input.txt',{encoding:'utf8'}).trim().split("");

export function solution() {
    let num = 0;
    for (let letter of rawFile) {
        let marker = new Set(rawFile.slice(num, num+14));
        if (marker.size === 14) {
            return num+14;
        }
        num++;
    }
}

solution();