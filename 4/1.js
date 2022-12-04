const fs = require("fs");

const rawFile = fs.readFileSync(__dirname + '/input.txt',{encoding:'utf8'});

let pairs = rawFile.trim().split(/\n/gm).map(x => x.split(","))

for (let pair of pairs) {
    let differenceof1 = (pair[0][0] === pair[1][0]) ? 0 : (parseInt(pair[1][0]) - parseInt(pair[0][0]))/Math.abs(parseInt(pair[1][0]) - parseInt(pair[0][0]))
}
