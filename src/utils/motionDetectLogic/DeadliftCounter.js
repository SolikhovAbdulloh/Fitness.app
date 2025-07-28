// DeadliftCounter.js
export class DeadliftCounter {
  constructor() {
    this.count = 0;
    this.previousAngle = null;
  }
  processPose(landmarks) {
    const leftHip = landmarks[23]; // Chap son
    const leftKnee = landmarks[25]; // Chap tizza
    const leftShoulder = landmarks[11]; // Chap yelka
    if (leftHip && leftKnee && leftShoulder) {
      const angle = this.calculateAngle(leftShoulder, leftHip, leftKnee);
      if (angle < 90 && this.previousAngle && this.previousAngle > 90) {
        this.count++;
        this.previousAngle = angle;
        return {
          count: this.count,
          alert: "",
          calorie: 0.15, // Taxminiy kaloriya
          score: 15, // Taxminiy ball
        };
      }
      this.previousAngle = angle;
    }
    return { count: this.count, alert: "", calorie: 0, score: 0 };
  }
  calculateAngle(a, b, c) {
    const radians =
      Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    return Math.abs((radians * 180.0) / Math.PI);
  }
  resetCount() {
    this.count = 0;
    this.previousAngle = null;
  }
  getCaloriePerSec() {
    return 0.15;
  }
  getScorePerSec() {
    return 15;
  }
}
