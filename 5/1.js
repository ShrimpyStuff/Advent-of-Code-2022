import fs from "fs";

const rawFile = fs.readFileSync('./5/input.txt',{encoding:'utf8'});

export function solution() {
    let file = rawFile.trim().split(/^\n/gm);
    let instructions = file[1].split(/\n/gm);
    let stacks = new Array(9).fill().map(u => []);
    let stackText = file[0].split(/\n/gm).map(x => x.replace(/\s{4}/g, " []").split(/\s/g)).slice(0,-2)
    let topStacks = "";
    
    for (let stack of stackText) {
        for (let letter in stack) {
            if (stack[letter] !== "[]") {
                stacks[letter].push(stack[letter].replace(/\[|\]/g, ""))
            }
        }
    }
    
    for (let line of instructions) {
        let matchedNumbers = line.match(/\d+/g).map(n => parseInt(n))
        let letters = stacks[matchedNumbers[1]-1].splice(0, matchedNumbers[0]).reverse()
        stacks[matchedNumbers[2]-1].unshift(...letters)
    }
    for (let stack of stacks) {
        topStacks += stack[0]
    }
    
    return topStacks;
}

solution();