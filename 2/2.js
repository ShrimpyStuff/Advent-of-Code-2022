const fs = require("fs");

const rawFile = fs.readFileSync('input.txt',{encoding:'utf8'});

let rounds = rawFile.split(/\n/gm)
rounds.pop()

let totalPoints = 0;

let RPSval = {"A": ["Y", "X"], "B": ["Z", "Y"], "C": ["X", "Z"]}
let RPSpoints = {"X": 1, "Y": 2, "Z": 3}

for (let round of rounds) {
    let played = round[2]
    let win = (played === RPSval[round[0]][0]) ? 6 : 0
    let draw = (played === RPSval[round[0]][1]) ? 3 : 0
    totalPoints += RPSpoints[played]
    totalPoints += win
    totalPoints += draw
}

console.log(totalPoints)