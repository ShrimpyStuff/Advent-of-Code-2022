const fs = require("fs");

const rawFile = fs.readFileSync('input.txt',{encoding:'utf8'});

let rounds = rawFile.split(/\n/gm)
rounds.pop()

let totalPoints = 0;

let RPSwinval = {"A": "Y", "B": "Z", "C": "X"}
let RPSdraw = {"A": "X", "B": "Y", "C": "Z"}
let RPSpoints = {"X": 1, "Y": 2, "Z": 3}

for (let round of rounds) {
    let points = 0;
    let played = round[2]
    let win = (played === RPSwinval[round[0]]) ? 6 : 0
    let draw = (played === RPSdraw[round[0]]) ? 3 : 0
    points += RPSpoints[played]
    points += win
    points += draw
    totalPoints += points
}

console.log(totalPoints)