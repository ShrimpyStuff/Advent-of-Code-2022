const args = process.argv.slice(2);
import fs from 'fs';

if (!args[0]) {
    console.log("\u001b[31mFiles not defined. <folder name> <file name> [generate]\u001b[0m");
    process.exit(1);
}

if (args[2] && args[2].toLowerCase() == "generate") {
    if (!fs.existsSync(`./${args[0]}`)){
        fs.mkdirSync(`./${args[0]}/`)
    }
    let fileContents = fs.readFileSync('template.js',{encoding:'utf8'}).replace("fileLoc", args[0])
    if (!fs.existsSync(`./${args[0]}/1.js`)) {
        fs.writeFileSync(`./${args[0]}/1.js`, fileContents)
    }
    if (!fs.existsSync(`./${args[0]}/2.js`)) {
        fs.writeFileSync(`./${args[0]}/2.js`, fileContents)
    }
    console.log("\u001b[32mGenerated\u001b[0m")
    process.exit(0);
}

const { solution } = await import(`./${args[0]}/${args[1]}.js`);

console.log(`Solution for Day ${args[0]}, Part ${args[1]}: \u001b[92m${solution()}\u001b[0m`)