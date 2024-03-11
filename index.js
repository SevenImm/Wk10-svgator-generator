const userIn = require("./lib/userIn")
const makeSVG = require("./lib/makeSVG");
const writeToFile = require("./lib/writeFile");

function main() {
  userIn().then((answers) => {
       // logo data
      const logoData = makeSVG(answers);
      // write the logo data to .svg file
      writeToFile("logo.svg", logoData);
    }) .catch((error) => console.error(error));
}


main();