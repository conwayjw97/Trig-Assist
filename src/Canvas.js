import React, { useState, useEffect, useRef } from 'react';
import './Canvas.css';

function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

function setupCanvas(ctx, width, height, radius) {
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.arc(width/2, height/2, radius, degToRad(0), degToRad(360), false);
  ctx.fill();

  ctx.lineWidth = 2;

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.moveTo(width/2-radius, height/2);
  ctx.lineTo(width/2+radius, height/2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width/2, height/2-radius);
  ctx.lineTo(width/2, height/2+radius);
  ctx.stroke();

  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(width/2, height/2);
  ctx.lineTo(width/2 + radius * Math.cos(degToRad(30)), height/2 - radius * Math.sin(degToRad(30)));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width/2, height/2);
  ctx.lineTo(width/2 + radius * Math.cos(degToRad(45)), height/2 - radius * Math.sin(degToRad(45)));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width/2, height/2);
  ctx.lineTo(width/2 + radius * Math.cos(degToRad(60)), height/2 - radius * Math.sin(degToRad(60)));
  ctx.stroke();
}

function onMouseMove(e, ctx, width, height, radius){
}

function Canvas() {
  const canvasRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const radius = Math.floor(height/2.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.onmousemove = e => onMouseMove(e, ctx, width, height, radius);
    setupCanvas(ctx, width, height, radius);
  }, []);

  return (
    <canvas ref={canvasRef} width={width} height={height} class="canvas">
      <p>Your browser doesn't support canvas.</p>
    </canvas>
  );
}

export default Canvas;
