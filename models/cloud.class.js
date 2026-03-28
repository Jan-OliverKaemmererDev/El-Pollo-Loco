/**
 * Represents a cloud that moves continuously to the left.
 * @extends MoveableObject
 */
class Cloud extends MoveableObject {
  y = 10;
  width = 600;
  height = 250;

  /**
   * Creates a new Cloud with the given image and x-position.
   * @param {string} [imagePath='img/5_background/layers/4_clouds/1.png'] - The cloud image path.
   * @param {number} [x=Math.random() * 500] - The starting x-coordinate.
   */
  constructor(imagePath = "img/5_background/layers/4_clouds/1.png", x = Math.random() * 500) {
    super().loadImage(imagePath);
    this.x = x;
    this.animate();
  }

  /**
   * Starts the cloud's continuous leftward movement.
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}