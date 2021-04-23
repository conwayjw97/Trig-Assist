import Circle from "./Circle.js";

import {
  degToRad,
  radToDeg
} from "./angleCalc.js";

const white = "rgb(255, 255, 255)";
const green = "rgb(36, 173, 48)";
const black = "rgb(40, 44, 52)";
const grey = "rgb(135, 135, 135)";

export default class CanvasDrawer {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = Math.floor(height/3);
    this.circle = new Circle(this.width/2, this.height/2, this.width, this.height, this.radius);
    this.resetCanvas();
  }

  drawAngleLine(angle){
    const [lineEndX, lineEndY] = this.circle.circleEndCoords(angle);
    const outputRadians = angle.toFixed(2);

    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = black;

    // Draw angle line
    this.ctx.beginPath();
    this.ctx.moveTo(this.width/2, this.height/2);
    this.ctx.lineTo(lineEndX, lineEndY);

    this.ctx.stroke();

    this.ctx.strokeStyle = green;

    // Draw sin line
    this.ctx.lineTo(lineEndX, this.height/2);

    // Draw cos line
    this.ctx.moveTo(lineEndX, lineEndY);
    this.ctx.lineTo(this.width/2, lineEndY);

    // Draw sec line
    const secLineLen = (1/Math.cos(angle)) * this.radius;
    const secLineEndX = this.width/2 + secLineLen;
    this.ctx.moveTo(this.width/2, this.height/2);
    this.ctx.lineTo(secLineEndX, this.height/2);

    // Draw cosec line
    const cosecLineLen = (1/Math.sin(angle)) * this.radius;
    const cosecLineEndY = this.height/2 - cosecLineLen;
    this.ctx.moveTo(this.width/2, this.height/2);
    this.ctx.lineTo(this.width/2, cosecLineEndY);

    // Draw tan line
    this.ctx.moveTo(lineEndX, lineEndY);
    this.ctx.lineTo(secLineEndX, this.height/2);

    // Draw cotan line
    this.ctx.moveTo(lineEndX, lineEndY);
    this.ctx.lineTo(this.width/2, cosecLineEndY);

    this.ctx.stroke();

    // Write angle value
    this.ctx.fillStyle = white;
    if(this.circle.isInRightQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    if(this.circle.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.circle.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    this.ctx.fillText(radToDeg(angle).toFixed(2) + "°", lineEndX, lineEndY);

    // Write cos values
    this.ctx.fillStyle = green;
    this.ctx.font = "20px Consolas";
    this.ctx.textAlign = "center";
    if(this.circle.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    if(this.circle.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    this.ctx.fillText(Math.cos(angle).toFixed(2), lineEndX+((this.width/2-lineEndX)/2), lineEndY);

    // Write sin values
    this.ctx.textBaseline = "middle";
    if(this.circle.isInRightQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    this.ctx.fillText(Math.sin(angle).toFixed(2), lineEndX, lineEndY+((this.height/2-lineEndY)/2));

    // Write sec values
    this.ctx.textAlign = "center";
    if(this.circle.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    if(this.circle.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    this.ctx.fillText((1/Math.cos(angle)).toFixed(2), secLineEndX+((this.width/2-secLineEndX)/2), this.height/2);

    // Write cosec values
    this.ctx.textBaseline = "middle";
    if(this.circle.isInRightQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    this.ctx.fillText((1/Math.sin(angle)).toFixed(2), this.width/2, cosecLineEndY+((this.height/2-cosecLineEndY)/2));

    // Write tan values
    this.ctx.textBaseline = "bottom";
    if(this.circle.isInRightQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    if(this.circle.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.circle.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    const lineEndXToSecLineEndX = secLineEndX-lineEndX;
    const lineEndYToSecLineEndY = this.height/2-lineEndY;
    if(Math.cos(angle) == 0.0){
      this.ctx.fillText("∞", lineEndX+(lineEndXToSecLineEndX/2), this.height/2-lineEndYToSecLineEndY/2);
    }
    else{
      this.ctx.fillText(Math.tan(angle).toFixed(2), lineEndX+(lineEndXToSecLineEndX/2), this.height/2-lineEndYToSecLineEndY/2);
    }

    // Write cotan values
    this.ctx.textBaseline = "bottom";
    if(this.circle.isInRightQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    if(this.circle.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.circle.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.circle.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    const lineEndXToCosecLineEndX = lineEndX-this.width/2;
    const lineEndYToCosecLineEndY = lineEndY-cosecLineEndY
    if(Math.sin(angle) == 0.0){
      this.ctx.fillText("∞", lineEndX-(lineEndXToCosecLineEndX/2), lineEndY-(lineEndYToCosecLineEndY/2));
    }
    else{
      this.ctx.fillText(Math.atan(angle).toFixed(2), lineEndX-(lineEndXToCosecLineEndX/2), lineEndY-(lineEndYToCosecLineEndY/2));
    };
  }

  resetCanvas() {
    const circleCentreX = this.width/2;
    const circleCentreY = this.height/2;

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.beginPath();
    this.ctx.arc(circleCentreX, circleCentreY, this.radius, degToRad(0), degToRad(360), false);
    this.ctx.fill();

    // Draw degree units lines
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = black;
    for(let i=0; i<360; i+=1) {
      let degreeUnitLen = (this.radius / 30);
      const [lineEndX, lineEndY] = this.circle.circleEndCoords(i);

      // Based on the midpoint formula, get a coordinate r/30 units away from
      // the end coordinate on the line between the centre and end coordinate
      if(i%5 == 0){
        degreeUnitLen = (this.radius / 20);
      }
      if(i%10 == 0){
        degreeUnitLen = (this.radius / 15);
      }
      const lineStartX = lineEndX + (degreeUnitLen / this.radius) * (this.width/2 - lineEndX);
      const lineStartY = lineEndY + (degreeUnitLen / this.radius) * (this.height/2 - lineEndY);

      this.ctx.beginPath();
      this.ctx.moveTo(lineStartX, lineStartY);
      this.ctx.lineTo(lineEndX, lineEndY);
      this.ctx.stroke();
    }

    // Draw radian unit lines
    this.ctx.strokeStyle = white;
    const radianUnitLen = (this.radius / 30);
    for(let i=0.0; i<(2*Math.PI); i+=0.1) {
      const lineEndX = this.width/2 + (this.radius + radianUnitLen) * Math.cos(i);
      const lineEndY = this.height/2 - (this.radius + radianUnitLen) * Math.sin(i);
      const [lineStartX, lineStartY] = this.circle.circleEndCoords(i);

      this.ctx.beginPath();
      this.ctx.moveTo(lineStartX, lineStartY);
      this.ctx.lineTo(lineEndX, lineEndY);
      this.ctx.stroke();
    }

    // Write degree unit values
    this.ctx.font = "12.5px Consolas";
    this.ctx.fillStyle = black;
    const degreeUnitValueLen = (this.radius / 15);
    for(let i=0; i<360; i+=10) {
      const posX = this.width/2 + (this.radius - degreeUnitValueLen) * Math.cos(degToRad(i));
      const posY = this.height/2 - (this.radius - degreeUnitValueLen) * Math.sin(degToRad(i));

      if(this.circle.isInRightQuadrants(degToRad(i))){
        this.ctx.textAlign = "end";
      }
      if(this.circle.isInLeftQuadrants(degToRad(i))){
        this.ctx.textAlign = "start";
      }
      if(this.circle.isInTopQuadrants(degToRad(i))){
        this.ctx.textBaseline = "top";
      }
      if(this.circle.isInBottomQuadrants(degToRad(i))){
        this.ctx.textBaseline = "bottom";
      }
      this.ctx.textAlign = "middle";
      this.ctx.textBaseline = "centre";

      console.log(this.ctx.textAlign);
      console.log(this.ctx.textBaseline);

      this.ctx.fillText(i, posX, posY);
    }

    // Write radian unit values
    this.ctx.fillStyle = grey;
    for(let i=0.0; i<(2*Math.PI); i+=0.1) {
      const posX = this.width/2 + (this.radius + radianUnitLen) * Math.cos(i);
      const posY = this.height/2 - (this.radius + radianUnitLen) * Math.sin(i);
      if(this.circle.isInRightQuadrants(i)){
        this.ctx.textAlign = "start";
      }
      if(this.circle.isInLeftQuadrants(i)){
        this.ctx.textAlign = "end";
      }
      if(this.circle.isInTopQuadrants(i)){
        this.ctx.textBaseline = "bottom";
      }
      if(this.circle.isInBottomQuadrants(i)){
        this.ctx.textBaseline = "top";
      }
      this.ctx.fillText(i.toFixed(1), posX, posY);
    }

    // Write Pi unit values
    this.ctx.fillStyle = grey;
    this.ctx.font = "20px Consolas";
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("0 & 2π", this.width/2 + this.radius + (radianUnitLen * 4), this.height/2);
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "bottom";
    this.ctx.fillText("π/2", this.width/2, this.height/2 - this.radius - (radianUnitLen * 4));
    this.ctx.textAlign = "end";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("π", this.width/2 - this.radius - (radianUnitLen * 4), this.height/2);
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "top";
    this.ctx.fillText("3π/2", this.width/2, this.height/2 + this.radius + (radianUnitLen * 4));

    // Draw axis lines
    this.ctx.strokeStyle = black;

    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX-this.radius, circleCentreY);
    this.ctx.lineTo(circleCentreX+this.radius, circleCentreY);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX, circleCentreY-this.radius);
    this.ctx.lineTo(circleCentreX, circleCentreY+this.radius);
    this.ctx.stroke();

    // Write quadtrants
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

  onMouseMove(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const circleCentreX = this.width/2;
    const circleCentreY = this.height/2;

    // If the distance of this point is less than the distance of the radius to the circle"s centre
    if(Math.sqrt((mouseX-circleCentreX)*(mouseX-circleCentreX) + (mouseY-circleCentreY)*(mouseY-circleCentreY)) < this.radius){
      this.resetCanvas();

      let diffX = mouseX - circleCentreX;
      let diffY = mouseY - circleCentreY;
      let angle = -Math.atan2(diffY, diffX);

      // The atan2 function returns negative radian values below 0, we want to show
      // the degrees in the range of [0, 2*Math.PI] so if the degree is negative then
      // just extract it from 2*Math.PI
      if(angle < 0){
        angle = (Math.PI * 2) + angle;
      }

      this.drawAngleLine(angle);
    }
  }
}
