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
    const canvasDrawer = new CanvasDrawer(ctx, width, height, props.trigVisible, props.circleDetails);
    if(props.radianAngle != null){
      canvasDrawer.drawAngleLine(props.radianAngle);
    }
    if(props.angleSelect){
      let mouseDown = false;
      canvas.onmousedown = (e) => {
        canvasDrawer.onMouseMove(e);
        mouseDown = true;
      }
      canvas.onmousemove = (e) => {
        if(mouseDown){
          const newRadians = canvasDrawer.onMouseMove(e);
          props.handleGraphRadianChange(newRadians);
        }
      }
      canvas.onmouseup = (e) => {
        mouseDown = false;
      }
    }
    else{
      canvas.onmousedown = null;
      canvas.onmousemove = null;
      canvas.onmouseup = null;
    }
  }, [props.updateCount]);

  return (
    <canvas ref={canvasRef} width={width} height={height} className="canvas">
      <p>Your browser doesn"t support canvas.</p>
    </canvas>
  );
}

export default Canvas;
