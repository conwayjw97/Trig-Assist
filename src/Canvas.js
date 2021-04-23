import React, { useState, useEffect, useRef } from 'react';
import './Canvas.css';

class CanvasDrawer {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = Math.floor(height/2.5);
  }

  degToRad(degrees) {
    return degrees * Math.PI / 180;
  }

  drawDegreeLine(degree){
    this.ctx.lineWidth = 1;

    this.ctx.beginPath();
    this.ctx.moveTo(this.width/2, this.height/2);
    this.ctx.lineTo(this.width/2 + this.radius * Math.cos(this.degToRad(degree)), this.height/2 - this.radius * Math.sin(this.degToRad(degree)));
    this.ctx.stroke();
  }

  setupCanvas() {
    this.ctx.fillStyle = 'rgb(255, 255, 255)';
    this.ctx.beginPath();
    this.ctx.arc(this.width/2, this.height/2, this.radius, this.degToRad(0), this.degToRad(360), false);
    this.ctx.fill();

    this.ctx.lineWidth = 2;

    this.ctx.fillStyle = 'rgb(255, 255, 255)';
    this.ctx.beginPath();
    this.ctx.moveTo(this.width/2-this.radius, this.height/2);
    this.ctx.lineTo(this.width/2+this.radius, this.height/2);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.width/2, this.height/2-this.radius);
    this.ctx.lineTo(this.width/2, this.height/2+this.radius);
    this.ctx.stroke();

    this.drawDegreeLine(30);
    this.drawDegreeLine(45);
    this.drawDegreeLine(60);
  }

  onMouseMove(e){
  }
}

function Canvas() {
  const canvasRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasDrawer = new CanvasDrawer(ctx, width, height);
    canvas.onmousemove = e => canvasDrawer.onMouseMove(e);
    canvasDrawer.setupCanvas();
  }, []);

  return (
    <canvas ref={canvasRef} width={width} height={height} class="canvas">
      <p>Your browser doesn't support canvas.</p>
    </canvas>
  );
}

export default Canvas;
