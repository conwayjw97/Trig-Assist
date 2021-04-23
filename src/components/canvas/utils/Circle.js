export default class Circle {
  constructor(centreX, centreY, width, height, radius) {
    this.centreX = centreX;
    this.centreY = centreY;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }

  circleEndCoords(radians) {
    const posEndX = this.centreX + this.radius * Math.cos(radians);
    const posEndY = this.centreY - this.radius * Math.sin(radians);
    return [posEndX, posEndY];
  }

  circleEndOffsetCoords(radians, offset) {
    const posEndX = this.centreX + (this.radius + offset) * Math.cos(radians);
    const posEndY = this.centreY - (this.radius + offset) * Math.sin(radians);
    return [posEndX, posEndY];
  }

  isInFirstQuadrant(radians){
    return radians >= 0 && radians <= Math.PI/2;
  }

  isInSecondQuadrant(radians){
    return radians > Math.PI/2 && radians <= Math.PI;
  }

  isInThirdQuadrant(radians){
    return radians > Math.PI && radians <= (3*Math.PI)/2;
  }

  isInFourthQuadrant(radians){
    return radians > (3*Math.PI)/2 && radians <= 2*Math.PI;
  }

  isInTopQuadrants(radians){
    return this.isInFirstQuadrant(radians) || this.isInSecondQuadrant(radians);
  }

  isInBottomQuadrants(radians){
    return this.isInThirdQuadrant(radians) || this.isInFourthQuadrant(radians);
  }

  isInRightQuadrants(radians){
    return this.isInFirstQuadrant(radians) || this.isInFourthQuadrant(radians);
  }

  isInLeftQuadrants(radians){
    return this.isInSecondQuadrant(radians) || this.isInThirdQuadrant(radians);
  }
}
