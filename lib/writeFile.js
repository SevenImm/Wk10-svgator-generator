const fs = require("fs");
const path = require("path");

function writeFile (filename, data) {
    try {
        fs.writeFileSync(path.join(__dirname, "..", filename), data);
        console.log("Generated logo.svg");
    } catch (error) {
        console.log(error);
    }
}

module.exports = writeFile;