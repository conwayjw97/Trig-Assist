import React, { useEffect, useRef } from "react";
import CanvasDrawer from "./utils/CanvasDrawer.js"
import "./Canvas.css";

function Canvas(props) {
  const canvas = useRef(null);
  const canvasLoaded = useRef(false);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    const canvasDrawer = new CanvasDrawer(ctx, width, height, props.angleUnit, props.trigVisible, props.circleDetails);

    if(!canvasLoaded.current){
      canvasDrawer.fadeIn();
      canvasLoaded.current = true;
    }

    if(props.radianAngle != null){
      canvasDrawer.drawAngleLine(parseFloat(props.radianAngle));
    }
    if(props.angleSelect){
      let mouseDown = false;
      canvas.current.onmousedown = (e) => {
        const newRadians = canvasDrawer.onMouseMove(e);
        if(newRadians != null){
          props.handleGraphRadianChange(newRadians);
        }
        mouseDown = true;
      }
      canvas.current.onmousemove = (e) => {
        if(mouseDown){
          const newRadians = canvasDrawer.onMouseMove(e);
          if(newRadians != null){
            props.handleGraphRadianChange(newRadians);
          }
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
