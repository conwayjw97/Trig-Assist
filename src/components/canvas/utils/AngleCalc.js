export function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

export function radToDeg(radians) {
  return radians * 180 / Math.PI;
}

export function isInFirstQuadrant(radians){
  return radians >= 0 && radians <= Math.PI/2;
}

export function isInSecondQuadrant(radians){
  return radians > Math.PI/2 && radians <= Math.PI;
}

export function isInThirdQuadrant(radians){
  return radians > Math.PI && radians <= (3*Math.PI)/2;
}

export function isInFourthQuadrant(radians){
  return radians > (3*Math.PI)/2 && radians <= 2*Math.PI;
}

export function isInTopQuadrants(radians){
  return isInFirstQuadrant(radians) || isInSecondQuadrant(radians);
}

export function isInBottomQuadrants(radians){
  return isInThirdQuadrant(radians) || isInFourthQuadrant(radians);
}

export function isInRightQuadrants(radians){
  return isInFirstQuadrant(radians) || isInFourthQuadrant(radians);
}

export function isInLeftQuadrants(radians){
  return isInSecondQuadrant(radians) || isInThirdQuadrant(radians);
}
