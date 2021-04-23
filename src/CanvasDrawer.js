const white = "rgb(255, 255, 255)";
const green = "rgb(35, 158, 45)";

export default class CanvasDrawer {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = Math.floor(height/3);
    this.resetCanvas();
  }

  degToRad(degrees) {
    return degrees * Math.PI / 180;
  }

  radToDeg(radians) {
    return radians * 180 / Math.PI;
  }

  isInFirstQuadrant(angle){
    return angle >= 0 && angle <= Math.PI/2;
  }

  isInSecondQuadrant(angle){
    return angle > Math.PI/2 && angle <= Math.PI;
  }

  isInThirdQuadrant(angle){
    return angle > Math.PI && angle <= (3*Math.PI)/2;
  }

  isInFourthQuadrant(angle){
    return angle > (3*Math.PI)/2 && angle <= 2*Math.PI;
  }

  isInTopQuadrants(angle){
    return this.isInFirstQuadrant(angle) || this.isInSecondQuadrant(angle);
  }

  isInBottomQuadrants(angle){
    return this.isInThirdQuadrant(angle) || this.isInFourthQuadrant(angle);
  }

  isInRightQuadrants(angle){
    return this.isInFirstQuadrant(angle) || this.isInFourthQuadrant(angle);
  }

  isInLeftQuadrants(angle){
    return this.isInSecondQuadrant(angle) || this.isInThirdQuadrant(angle);
  }

  drawAngleLine(angle){
    const lineEndX = this.width/2 + this.radius * Math.cos(angle);
    const lineEndY = this.height/2 - this.radius * Math.sin(angle);
    const outputRadians = angle.toFixed(2);

    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = green;

    // Draw angle line
    this.ctx.beginPath();
    this.ctx.moveTo(this.width/2, this.height/2);
    this.ctx.lineTo(lineEndX, lineEndY);

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
    if(this.isInRightQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    if(this.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    this.ctx.fillText(this.radToDeg(angle).toFixed(2) + "°", lineEndX, lineEndY);

    // Write cos values
    this.ctx.fillStyle = green;
    this.ctx.font = "20px Consolas";
    this.ctx.textAlign = "center";
    if(this.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    if(this.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    this.ctx.fillText(Math.cos(angle).toFixed(2), lineEndX+((this.width/2-lineEndX)/2), lineEndY);

    // Write sin values
    this.ctx.textBaseline = "middle";
    if(this.isInRightQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    this.ctx.fillText(Math.sin(angle).toFixed(2), lineEndX, lineEndY+((this.height/2-lineEndY)/2));

    // Write sec values
    this.ctx.textAlign = "center";
    if(this.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "top";
    }
    if(this.isInBottomQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    this.ctx.fillText((1/Math.cos(angle)).toFixed(2), secLineEndX+((this.width/2-secLineEndX)/2), this.height/2);

    // Write cosec values
    this.ctx.textBaseline = "middle";
    if(this.isInRightQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    this.ctx.fillText((1/Math.sin(angle)).toFixed(2), this.width/2, cosecLineEndY+((this.height/2-cosecLineEndY)/2));

    // Write tan values
    this.ctx.textBaseline = "bottom";
    if(this.isInRightQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    if(this.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.isInBottomQuadrants(angle)){
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
    if(this.isInRightQuadrants(angle)){
      this.ctx.textAlign = "start";
    }
    if(this.isInLeftQuadrants(angle)){
      this.ctx.textAlign = "end";
    }
    if(this.isInTopQuadrants(angle)){
      this.ctx.textBaseline = "bottom";
    }
    if(this.isInBottomQuadrants(angle)){
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
    this.ctx.arc(circleCentreX, circleCentreY, this.radius, this.degToRad(0), this.degToRad(360), false);
    this.ctx.fill();

    // Draw axis lines
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = green;

    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX-this.radius, circleCentreY);
    this.ctx.lineTo(circleCentreX+this.radius, circleCentreY);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX, circleCentreY-this.radius);
    this.ctx.lineTo(circleCentreX, circleCentreY+this.radius);
    this.ctx.stroke();

    // Draw quadtrants
    this.ctx.fillStyle = green;
    this.ctx.font = "20px Consolas";
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