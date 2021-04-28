import React, { useEffect, useRef } from "react";
import CanvasDrawer from "./utils/CanvasDrawer.js"
import "./Canvas.css";

function Canvas(props) {
  const canvas = useRef(null);
  const canvasLoaded = useRef(false);
  const canvasDrawer = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    if(!canvasLoaded.current){
      const ctx = canvas.current.getContext("2d");
      canvasDrawer.current = new CanvasDrawer(ctx, width, height, props.angleUnit, props.trigVisible, props.circleDetails);
      canvasLoaded.current = true;
    }

    if(props.radianAngle != null){
      canvasDrawer.current.resetCanvas();
      canvasDrawer.current.drawAngleLine(props.radianAngle);
    }
    if(props.angleSelect){
      let mouseDown = false;
      canvas.current.onmousedown = (e) => {
        const newRadians = canvasDrawer.current.onMouseMove(e);
        props.handleGraphRadianChange(newRadians);
        mouseDown = true;
      }
      canvas.current.onmousemove = (e) => {
        if(mouseDown){
          const newRadians = canvasDrawer.current.onMouseMove(e);
          props.handleGraphRadianChange(newRadians);
        }
      }
      canvas.current.onmouseup = (e) => {
        mouseDown = false;
      }
    }
    else{
      canvas.current.onmousedown = null;
      canvas.current.onmousemove = null;
      canvas.current.onmouseup = null;
    }
  }, [props.updateCount]);

  return (
    <canvas ref={canvas} width={width} height={height} className="canvas">
      <p>Your browser doesn"t support canvas.</p>
    </canvas>
  );
}

export default Canvas;
