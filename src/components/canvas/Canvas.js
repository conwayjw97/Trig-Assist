import React, { useState, useEffect, useRef } from "react";
import CanvasDrawer from "./CanvasDrawer.js"
import "./Canvas.css";

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
