import React, { useState, useEffect, useRef } from "react";
import "./Canvas.css";

class CanvasDrawer {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = Math.floor(height/2.5);
    this.resetCanvas();
  }

  degToRad(degrees) {
    return degrees * Math.PI / 180;
  }

  radToDeg(radians) {
    return -(radians * 180 / Math.PI);
  }

  drawDegreeLine(degree){
    const lineEndX = this.width/2 + this.radius * Math.cos(this.degToRad(degree));
    const lineEndY = this.height/2 - this.radius * Math.sin(this.degToRad(degree));
    const outputDegree = degree.toFixed(2) + "°";
    let yOffset = 0;
    if((degree >= 0 && degree <= 90) || (degree >= 270 && degree <= 360)){
      this.ctx.textAlign = "start";
    }
    if(degree > 90 && degree < 270){
      this.ctx.textAlign = "end";
    }
    if(degree >= 0 && degree <= 180){
      this.ctx.textBaseline = "bottom";
    }
    if(degree > 180 && degree <= 360){
      this.ctx.textBaseline = "top";
    }

    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = "rgb(0, 0, 0)";

    this.ctx.beginPath();
    this.ctx.moveTo(this.width/2, this.height/2);
    this.ctx.lineTo(lineEndX, lineEndY);
    this.ctx.stroke();

    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.font = "20px Consolas";
    this.ctx.fillText(outputDegree, lineEndX, lineEndY+yOffset);
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
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = "rgb(0, 0, 0)";

    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX-this.radius, circleCentreY);
    this.ctx.lineTo(circleCentreX+this.radius, circleCentreY);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(circleCentreX, circleCentreY-this.radius);
    this.ctx.lineTo(circleCentreX, circleCentreY+this.radius);
    this.ctx.stroke();

    // Draw quadtrants
    this.ctx.fillStyle = "rgb(0, 0, 0)";
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
      let angle = this.radToDeg(Math.atan2(diffY, diffX));

      // The atan2 function returns negative degree values below 0, we want to show
      // the degrees in the range of [0, 360] so if the degree is negative then
      // just extract it from 360
      if(angle < 0){
        angle = 360 + angle;
      }

      this.drawDegreeLine(angle);
    }
  }
}

function Canvas() {
  const canvasRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasDrawer = new CanvasDrawer(ctx, width, height);
    canvas.onmousemove = e => canvasDrawer.onMouseMove(e);
  }, []);

  return (
    <canvas ref={canvasRef} width={width} height={height} className="canvas">
      <p>Your browser doesn"t support canvas.</p>
    </canvas>
  );
}

export default Canvas;
