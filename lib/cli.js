const inquirer = require("inquirer");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter main text / heading",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color",
        },
        {
          name: "subText",
          type: "input",
          message: "Enter a sub text",
        },
            {
          name: "subTextColor",
          type: "input",
          message: "Enter a sub text color",
        }
      ])
      .then(({ text, textColor, subText, subTextColor}) => {


        const svg = new SVG();
        svg.setMainText(text, textColor);
        svg.setSubText(subText, subTextColor);
        return writeFile("logo.svg", svg.render()); 

      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  }
}

module.exports = CLI;
