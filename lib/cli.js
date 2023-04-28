const inquirer = require("inquirer");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");

// Command Line Interface constructor / blueprint 
class CLI {
  run() {
    return inquirer
    // prompts to the user
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
      // parameters are the names of the prompts above
      .then(({ text, textColor, subText, subTextColor}) => {

        // actually create the class from the constructor / blueprint
        const svg = new SVG();
        // add users input for the Main text to the svg
        svg.setMainText(text, textColor);
          // add users input for the secondary text below to the svg
        svg.setSubText(subText, subTextColor);
        // create the svg file 'logo.svg' using the data above 
        return writeFile("logo.svg", svg.render()); 

      })
      .then(() => {
        // if generated
        console.log("Generated logo.svg");
      })
      // if failed
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  }
}

module.exports = CLI;
