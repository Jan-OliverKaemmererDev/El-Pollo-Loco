class Chicken extends MoveableObject {
  height = 70;
  width = 70;
  y = 350;
  offset = {
    top: 15,
    left: 15,
    right: 15,
    bottom: 15,
  };

  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  isDead = false;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);

    this.x = 500 + Math.random() * 2000;
    this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (
        !this.isDead &&
        this.world &&
        !this.world.character.isDead() &&
        !this.world.isEndbossDead()
      ) {
        if (this.isColliding(this.world.character)) {
          return;
        }
        if (this.x > this.world.character.x) {
          this.moveLeft();
          this.otherDirection = false;
        } else {
          this.moveRight();
          this.otherDirection = true;
        }
      }
    }, 1000 / 60);

    setInterval(() => {
      if (
        !this.isDead &&
        this.world &&
        !this.world.character.isDead() &&
        !this.world.isEndbossDead()
      ) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 300);
  }

  die() {
    this.isDead = true;
    this.loadImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png");

    if (this.world) {
      let livingChickens = this.world.level.enemies.filter(
        (e) => e instanceof Chicken && !(e instanceof SmallChicken) && !e.isDead
      );
      
      if (livingChickens.length === 0) {
        soundManager.stopChickenSound();
      }
    }
  }
}
