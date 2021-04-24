import React, { useEffect, useRef } from "react";
import CanvasDrawer from "./utils/CanvasDrawer.js"
import "./Canvas.css";

function Canvas(props) {
  const canvasRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasDrawer = new CanvasDrawer(ctx, width, height);
    canvasDrawer.drawAngleLine(props.radianAngle);
    canvas.onmousemove = e => canvasDrawer.onMouseMove(e);
  }, [props.radianAngle]);

  return (
    <canvas ref={canvasRef} width={width} height={height} className="canvas">
      <p>Your browser doesn"t support canvas.</p>
    </canvas>
  );
}

export default Canvas;
