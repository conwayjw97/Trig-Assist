import Circle from "./Circle.js";

import {
  degToRad,
  radToDeg
} from "../../../utils/angleCalc.js";

const white = "rgb(255, 255, 255)";
const green = "rgb(36, 173, 48)";
const brightGreen = "rgb(25, 207, 41)"
const black = "rgb(40, 44, 52)";
const grey = "rgb(135, 135, 135)";

export default class CanvasDrawer {
  constructor(ctx, width, height, angleUnit, trigVisible, circleDetails) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.angleUnit = angleUnit;
    this.trigVisible = trigVisible;
    this.circleDetails = circleDetails;
    this.radius = Math.floor(height/3);
    this.circle = new Circle(this.width/2, this.height/2, this.width, this.height, this.radius);
    this.resetCanvas();
  }

  textAlignOutwards(radians){
    if(this.circle.isInRightQuadrants(radians)){
      this.ctx.textAlign = "start";
    }
    if(this.circle.isInLeftQuadrants(radians)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInTopQuadrants(radians)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.circle.isInBottomQuadrants(radians)){
      this.ctx.textBaseline = "top";
    }
  }

  textAlignInwards(radians){
    if(this.circle.isInRightQuadrants(radians)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInLeftQuadrants(radians)){
      this.ctx.textAlign = "start";
    }
    if(this.circle.isInTopQuadrants(radians)){
      this.ctx.textBaseline = "top";
    }
    if(this.circle.isInBottomQuadrants(radians)){
      this.ctx.textBaseline = "bottom";
    }
  }

  textAlignTopBottomInwards(radians){
    this.ctx.textAlign = "center";
    if(this.circle.isInTopQuadrants(radians)){
      this.ctx.textBaseline = "top";
    }
    if(this.circle.isInBottomQuadrants(radians)){
      this.ctx.textBaseline = "bottom";
    }
  }

  textAlignRightLeftInwards(radians){
    this.ctx.textBaseline = "middle";
    if(this.circle.isInRightQuadrants(radians)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInLeftQuadrants(radians)){
      this.ctx.textAlign = "start";
    }
  }

  drawAngleLine(radians){
    const [lineEndX, lineEndY] = this.circle.circleEndCoords(radians);
    const circleCentreX = this.circle.centreX;
    const circleCentreY = this.circle.centreY;
    const radius = this.circle.radius;

    this.ctx.lineWidth = 2;

    // Draw angle line
    this.ctx.strokeStyle = green;
    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX, circleCentreY);
    this.ctx.lineTo(lineEndX, lineEndY);
    this.ctx.stroke();

    // Draw trigonometric function lines
    this.ctx.beginPath();

    // Draw sin line
    if(this.trigVisible.sin){
      this.ctx.moveTo(lineEndX, lineEndY);
      this.ctx.lineTo(lineEndX, circleCentreY);
    }

    // Draw cos line
    if(this.trigVisible.cos){
      this.ctx.moveTo(lineEndX, lineEndY);
      this.ctx.lineTo(circleCentreX, lineEndY);
    }

    // Draw sec line
    const secLineLen = (1/Math.cos(radians)) * radius;
    const secLineEndX = circleCentreX + secLineLen;
    if(this.trigVisible.sec){
      this.ctx.moveTo(circleCentreX, circleCentreY);
      this.ctx.lineTo(secLineEndX, circleCentreY);
    }

    // Draw cosec line
    const cosecLineLen = (1/Math.sin(radians)) * radius;
    const cosecLineEndY = circleCentreY - cosecLineLen;
    if(this.trigVisible.csc){
      this.ctx.moveTo(circleCentreX, circleCentreY);
      this.ctx.lineTo(circleCentreX, cosecLineEndY);
    }

    // Draw tan line
    if(this.trigVisible.tan){
      this.ctx.moveTo(lineEndX, lineEndY);
      this.ctx.lineTo(secLineEndX, circleCentreY);
    }

    // Draw cotan line
    if(this.trigVisible.cot){
      this.ctx.moveTo(lineEndX, lineEndY);
      this.ctx.lineTo(circleCentreX, cosecLineEndY);
    }

    this.ctx.stroke();

    this.ctx.font = "20px Consolas";

    // Write angle value
    if(this.angleUnit != "none"){
      this.ctx.fillStyle = white;
      this.textAlignOutwards(radians);
      if(this.angleUnit == "degrees"){
        this.ctx.fillText(radToDeg(radians).toFixed(2) + "°", lineEndX, lineEndY);
      }
      if(this.angleUnit == "radians"){
        console.log(radians);
        if(radians % 1 != 0){
          this.ctx.fillText(radians.toFixed(5), lineEndX, lineEndY);
        }
        else{
          this.ctx.fillText(radians, lineEndX, lineEndY);
        }
      }
    }

    this.ctx.fillStyle = green;

    // Write cos values
    if(this.trigVisible.cos){
      this.textAlignTopBottomInwards(radians);
      this.ctx.fillText(Math.abs(Math.cos(radians).toFixed(2)), lineEndX+((circleCentreX-lineEndX)/2), lineEndY);
    }

    // Write sin values
    if(this.trigVisible.sin){
      this.textAlignRightLeftInwards(radians);
      this.ctx.fillText(Math.abs(Math.sin(radians).toFixed(2)), lineEndX, lineEndY+((circleCentreY-lineEndY)/2));
    }

    // Write sec values
    if(this.trigVisible.sec){
      this.textAlignTopBottomInwards(radians);
      this.ctx.fillText(Math.abs((1/Math.cos(radians)).toFixed(2)), secLineEndX+((circleCentreX-secLineEndX)/2), circleCentreY);
    }

    // Write cosec values
    if(this.trigVisible.csc){
      this.textAlignRightLeftInwards(radians);
      this.ctx.fillText(Math.abs((1/Math.sin(radians)).toFixed(2)), circleCentreX, cosecLineEndY+((circleCentreY-cosecLineEndY)/2));
    }

    // Write tan values
    if(this.trigVisible.tan){
      this.textAlignOutwards(radians);
      const lineEndXToSecLineEndX = secLineEndX-lineEndX;
      const lineEndYToSecLineEndY = circleCentreY-lineEndY;
      this.ctx.fillText(Math.abs(Math.tan(radians).toFixed(2)), lineEndX+(lineEndXToSecLineEndX/2), circleCentreY-lineEndYToSecLineEndY/2);
    }

    // Write cotan values
    if(this.trigVisible.cot){
      this.textAlignOutwards(radians);
      const lineEndXToCosecLineEndX = lineEndX-circleCentreX;
      const lineEndYToCosecLineEndY = lineEndY-cosecLineEndY;
      this.ctx.fillText(Math.abs((1/Math.tan(radians)).toFixed(2)), lineEndX-(lineEndXToCosecLineEndX/2), lineEndY-(lineEndYToCosecLineEndY/2));
    }
  }

  resetCanvas() {
    const circleCentreX = this.circle.centreX;
    const circleCentreY = this.circle.centreY;
    const radius = this.circle.radius;

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw circle
    this.ctx.fillStyle = white;
    this.ctx.beginPath();
    this.ctx.arc(circleCentreX, circleCentreY, radius, degToRad(0), degToRad(360), false);
    this.ctx.fill();

    this.ctx.lineWidth = 1;

    // Draw degree unit lines
    if(this.circleDetails.degrees){
      this.ctx.strokeStyle = black;
      for(let i=0; i<360; i+=1) {
        let degreeUnitLen = (radius / 30);
        if(i%5 === 0){
          degreeUnitLen = (radius / 20);
        }
        if(i%10 === 0){
          degreeUnitLen = (radius / 15);
        }

        const radiants = degToRad(i);
        const [lineEndX, lineEndY] = this.circle.circleEndCoords(radiants);
        const [lineStartX, lineStartY] = this.circle.circleEndOffsetCoords(radiants, -degreeUnitLen);

        this.ctx.beginPath();
        this.ctx.moveTo(lineStartX, lineStartY);
        this.ctx.lineTo(lineEndX, lineEndY);
        this.ctx.stroke();
      }
    }

    // Draw radian unit lines
    const radianUnitLen = (radius / 30);
    if(this.circleDetails.radians){
      this.ctx.strokeStyle = white;
      for(let i=0.0; i<(2*Math.PI); i+=0.1) {
        const [lineStartX, lineStartY] = this.circle.circleEndCoords(i);
        const [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(i, radianUnitLen);

        this.ctx.beginPath();
        this.ctx.moveTo(lineStartX, lineStartY);
        this.ctx.lineTo(lineEndX, lineEndY);
        this.ctx.stroke();
      }
    }

    this.ctx.font = "12.5px Consolas";

    // Write degree unit values
    if(this.circleDetails.degrees){
      this.ctx.fillStyle = black;
      const degreeUnitValueLen = (radius / 15);
      for(let i=0; i<360; i+=10) {
        const radians = degToRad(i);
        const [posX, posY] = this.circle.circleEndOffsetCoords(radians, -degreeUnitValueLen);

        this.textAlignInwards(radians);
        this.ctx.fillText(i, posX, posY);
      }
    }

    this.ctx.fillStyle = grey;

    // Write radian unit values
    if(this.circleDetails.radians){
      for(let i=0.0; i<(2*Math.PI); i+=0.1) {
        const [posX, posY] = this.circle.circleEndOffsetCoords(i, radianUnitLen);

        this.textAlignOutwards(i);
        this.ctx.fillText(i.toFixed(1), posX, posY);
      }
    }

    // Write Pi unit values
    if(this.circleDetails.pi){
      this.ctx.font = "20px Consolas";
      this.ctx.textAlign = "start";
      this.ctx.textBaseline = "middle";
      this.ctx.fillText("0 & 2π", circleCentreX + radius + (radianUnitLen * 4), circleCentreY);

      this.ctx.textBaseline = "bottom";
      let [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(30), (radianUnitLen * 4));
      this.ctx.fillText("π/6", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(45), (radianUnitLen * 4));
      this.ctx.fillText("π/4", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(60), (radianUnitLen * 4));
      this.ctx.fillText("π/3", lineEndX, lineEndY);

      this.ctx.textAlign = "center";
      this.ctx.fillText("π/2", circleCentreX, circleCentreY - radius - (radianUnitLen * 4));

      this.ctx.textAlign = "end";
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(120), (radianUnitLen * 4));
      this.ctx.fillText("2π/3", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(135), (radianUnitLen * 4));
      this.ctx.fillText("3π/4", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(150), (radianUnitLen * 4));
      this.ctx.fillText("5π/6", lineEndX, lineEndY);

      this.ctx.textBaseline = "middle";
      this.ctx.fillText("π", circleCentreX - radius - (radianUnitLen * 4), circleCentreY);

      this.ctx.textBaseline = "top";
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(210), (radianUnitLen * 4));
      this.ctx.fillText("7π/6", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(225), (radianUnitLen * 4));
      this.ctx.fillText("5π/4", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(240), (radianUnitLen * 4));
      this.ctx.fillText("4π/3", lineEndX, lineEndY);

      this.ctx.textAlign = "center";
      this.ctx.fillText("3π/2", circleCentreX, circleCentreY + radius + (radianUnitLen * 4));

      this.ctx.textAlign = "start";
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(300), (radianUnitLen * 4));
      this.ctx.fillText("5π/3", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(315), (radianUnitLen * 4));
      this.ctx.fillText("7π/4", lineEndX, lineEndY);
      [lineEndX, lineEndY] = this.circle.circleEndOffsetCoords(degToRad(330), (radianUnitLen * 4));
      this.ctx.fillText("11π/6", lineEndX, lineEndY);
    }

    // Draw axis lines
    if(this.circleDetails.axes){
      this.ctx.strokeStyle = black;

      this.ctx.beginPath();
      this.ctx.moveTo(circleCentreX-radius, circleCentreY);
      this.ctx.lineTo(circleCentreX+radius, circleCentreY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(circleCentreX, circleCentreY-radius);
      this.ctx.lineTo(circleCentreX, circleCentreY+radius);
      this.ctx.stroke();
    }

    // Write quadtrants
    if(this.circleDetails.quadrants){
      this.ctx.fillStyle = black;
      this.ctx.font = "17.5px Consolas";
      this.ctx.textAlign = "start";
      this.ctx.textBaseline = "bottom";
      this.ctx.fillText("I", circleCentreX+5, circleCentreY-5);
      this.ctx.textAlign = "end";
      this.ctx.fillText("II", circleCentreX-5, circleCentreY-5);
      this.ctx.textAlign = "end";
      this.ctx.textBaseline = "top";
      this.ctx.fillText("III", circleCentreX-5, circleCentreY+5);
      this.ctx.textAlign = "start";
      this.ctx.fillText("IV", circleCentreX+5, circleCentreY+5);
    }

    // Write trig function signs
    if(this.circleDetails.signs){
      this.ctx.fillStyle = black;
      this.ctx.font = "17.5px Consolas";

      const yOffsets = [30, 45, 60, 75, 90, 105];

      this.ctx.textAlign = "start";
      this.ctx.textBaseline = "bottom";
      let functionSigns = ["csc +", "sec +", "cot +", "tan +", "cos +", "sin +"];
      for(let i=0; i<functionSigns.length; i++){
        this.ctx.fillText(functionSigns[i], circleCentreX+30, circleCentreY-yOffsets[i]);
      }

      this.ctx.textAlign = "end";
      functionSigns = ["csc +", "sec -", "cot -", "tan -", "cos -", "sin +"];
      for(let i=0; i<functionSigns.length; i++){
        this.ctx.fillText(functionSigns[i], circleCentreX-30, circleCentreY-yOffsets[i]);
      }

      this.ctx.textBaseline = "top";
      functionSigns = ["csc -", "sec -", "cot +", "tan +", "cos -", "sin -"];
      for(let i=0; i<functionSigns.length; i++){
        this.ctx.fillText(functionSigns[i], circleCentreX-30, circleCentreY+yOffsets[i]);
      }

      this.ctx.textAlign = "start";
      functionSigns = ["csc -", "sec +", "cot -", "tan -", "cos +", "sin -"];
      for(let i=0; i<functionSigns.length; i++){
        this.ctx.fillText(functionSigns[i], circleCentreX+30, circleCentreY+yOffsets[i]);
      }
    }
  }

  async fadeIn(){
    const timer = ms => new Promise(res => setTimeout(res, ms));
    let alpha = 0;
    let delta = 0.02;

    while(alpha < 1.0){
      this.ctx.globalAlpha = alpha;
      this.resetCanvas();
      alpha += delta;
      await timer(10);
    }

    this.ctx.globalAlpha = 1;
  }

  onMouseMove(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const circleCentreX = this.circle.centreX;
    const circleCentreY = this.circle.centreY;
    const radius = this.circle.radius;

    // If the distance of this point is less than the distance of the radius to the circle's centre
    if(Math.sqrt((mouseX-circleCentreX)*(mouseX-circleCentreX) + (mouseY-circleCentreY)*(mouseY-circleCentreY)) < radius){
      this.resetCanvas();

      let diffX = mouseX - circleCentreX;
      let diffY = mouseY - circleCentreY;
      let radians = -Math.atan2(diffY, diffX);

      // The atan2 function returns negative radian values below 0, we want to show
      // the degrees in the range of [0, 2*Math.PI] so if the degree is negative then
      // just extract it from 2*Math.PI
      if(radians < 0){
        radians = (Math.PI * 2) + radians;
      }

      this.drawAngleLine(radians);

      return radians;
    }

    return null;
  }
}
