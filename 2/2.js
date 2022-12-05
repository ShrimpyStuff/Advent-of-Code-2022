import fs from "fs";

const rawFile = fs.readFileSync('./2/input.txt',{encoding:'utf8'});

export function solution() {
    let rounds = rawFile.split(/\n/gm)
    rounds.pop()

    let totalPoints = 0;

    // PlayedValue : [win, draw]
    let RPSval = {"A": [2, 1], "B": [3, 2], "C": [1, 3]}

    for (let round of rounds) {
        let played = round[2]
        let val = 0;
        switch(played) {
            case "Z":
                val = 6 + RPSval[round[0]][0]
                break
            case "Y":
                val = 3 + RPSval[round[0]][1]
                break
            case "X":
                val = 0 + (6 - (RPSval[round[0]][1] + RPSval[round[0]][0]))
                break
        }
        totalPoints += val;
    }
    return totalPoints;
}

solution();