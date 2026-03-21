class Endboss extends MoveableObject {
  height = 350;
  width = 280;
  y = 100;

  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png"
  ];

  energy = 100;
  isDead = false;

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2900;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.isDead) {
        if (this.currentImage < this.IMAGES_DEAD.length) {
          this.playAnimation(this.IMAGES_DEAD);
        }
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 300);
  }

  die() {
    this.isDead = true;
    this.currentImage = 0;
  }
}
