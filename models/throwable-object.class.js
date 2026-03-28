/**
 * Represents a throwable salsa bottle with rotation and splash animations.
 * @extends MoveableObject
 */
class ThrowableObject extends MoveableObject {
  IMAGES_ROTATION = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  isSplashed = false;

  /**
   * Creates a new throwable bottle at the given position and direction.
   * @param {number} x - The x-coordinate of the throw origin.
   * @param {number} y - The y-coordinate of the throw origin.
   * @param {boolean} direction - True if thrown to the left, false if to the right.
   */
  constructor(x, y, direction) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.IMAGES_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.otherDirection = direction;
    this.height = 60;
    this.width = 50;
    this.throw();
  }

  /**
   * Initiates the throw by applying gravity, playing the throw sound, and starting horizontal movement.
   */
  throw() {
    this.speedY = 30;
    this.applyGravity();
    if (typeof soundManager !== "undefined") {
      soundManager.playBottleThrowSound();
    }
    this.startHorizontalMovement();
    this.animate();
  }

  /**
   * Starts the horizontal movement interval, moving the bottle left or right.
   */
  startHorizontalMovement() {
    this.moveInterval = setInterval(() => {
      if (!this.isSplashed) {
        this.x += this.otherDirection ? -10 : 10;
      }
    }, 25);
  }

  /**
   * Starts the animation interval, switching between rotation and splash animations.
   */
  animate() {
    setInterval(() => {
      if (this.isSplashed) {
        this.playAnimation(this.IMAGES_SPLASH);
      } else {
        this.playAnimation(this.IMAGES_ROTATION);
      }
    }, 50);
  }

  /**
   * Triggers the splash effect, stops movement, and plays the shatter sound.
   */
  splash() {
    this.isSplashed = true;
    this.speedY = 0;
    if (typeof soundManager !== "undefined") {
      soundManager.stopBottleThrowSound();
      soundManager.playBottleShatterSound();
    }
    setTimeout(() => {
      clearInterval(this.moveInterval);
    }, 100);
  }
}