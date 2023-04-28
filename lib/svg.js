class SVG {
    constructor() {
      this.mainText = "";
      this.subText = "";
    }
  
  // render the svg
    render() {
      return `<svg version="1.1" width="550" height="375" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">${this.mainText}${this.subText}</svg>`;
    }
  // insert users input into the svg
  setMainText(message, color) {
    // if (message.length > 3) {
    //   throw new Error("Text must not exceed 3 characters.");
    // }
    this.mainText = `<text font-family="Koldby" fill="${color}" text-anchor="middle" x="150" y="150" font-size="3.5rem">
      ${message}</text>`;
  }

  setSubText(message1, color1) {

  this.subText = `<text font-variant="small" font-size="1.6rem" font-family="cursive" text-anchor="middle" x="150" y="188" fill="${color1}">${message1}</text>`;
}
    }


  
  module.exports = SVG;
  