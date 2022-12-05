import fs from "fs";

const rawFile = fs.readFileSync('./2/input.txt',{encoding:'utf8'});

export function solution() {
    let rounds = rawFile.split(/\n/gm)
    rounds.pop()

    let totalPoints = 0;

    let RPSval = {"A": ["Y", "X", 1], "B": ["Z", "Y", 2], "C": ["X", "Z", 3]}
    let RPSpoints = {"X": 1, "Y": 2, "Z": 3}

    for (let round of rounds) {
        let played = round[2]
        let win = (played === RPSval[round[0]][0]) ? 6 : 0
        let draw = (played === RPSval[round[0]][1]) ? 3 : 0
        totalPoints += RPSpoints[played]
        totalPoints += win
        totalPoints += draw
    }

    return totalPoints;
}

solution();