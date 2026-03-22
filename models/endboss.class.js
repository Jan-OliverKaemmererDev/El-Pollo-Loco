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

  IMAGES_ALERT = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png"
  ];

  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png"
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png"
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png"
  ];

  energy = 100;
  isDead = false;
  hadFirstContact = false;
  isAlert = false;
  isHurt = false;
  isAttacking = false;
  speed = 1.5;

  constructor() {
    super().loadImage(this.IMAGES_ALERT[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2900;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.checkFirstContact();
      this.moveTowardsCharacter();
    }, 1000 / 60);

    setInterval(() => {
      this.playStates();
    }, 200);

    setInterval(() => {
      this.triggerRandomAttack();
    }, 2500); 
  }

  checkFirstContact() {
    if (!this.hadFirstContact && this.world && this.world.character.x > 2300) {
      this.hadFirstContact = true;
      this.isAlert = true;
      setTimeout(() => {
        this.isAlert = false;
      }, 1500); // Alert state lasts 1.5s
    }
  }

  moveTowardsCharacter() {
    if (this.hadFirstContact && !this.isDead && !this.isAlert && !this.isHurt) {
      // The Endboss should walk towards the character
      if (this.world && this.x > this.world.character.x) {
        this.moveLeft();
        this.otherDirection = false;
      } else {
        this.moveRight();
        this.otherDirection = true;
      }
    }
  }

  playStates() {
    if (this.isDead) {
      if (this.currentImage < this.IMAGES_DEAD.length) {
        this.playAnimation(this.IMAGES_DEAD);
      }
    } else if (this.isHurt) {
      this.playAnimation(this.IMAGES_HURT);
    } else if (this.isAlert) {
      this.playAnimation(this.IMAGES_ALERT);
    } else if (this.isAttacking) {
      this.playAnimation(this.IMAGES_ATTACK);
    } else if (this.hadFirstContact) {
      this.playAnimation(this.IMAGES_WALKING);
    } else {
      // Idle before first contact
      this.loadImage(this.IMAGES_ALERT[0]);
    }
  }

  triggerRandomAttack() {
    if (this.hadFirstContact && !this.isDead && !this.isAlert && !this.isHurt) {
      if (Math.random() < 0.4) { // 40% chance every 2.5s
        this.isAttacking = true;
        setTimeout(() => {
          this.isAttacking = false;
        }, 1000);
      }
    }
  }

  playHurt() {
    this.isHurt = true;
    setTimeout(() => {
      this.isHurt = false;
    }, 400); // Hurt animation duration
  }

  die() {
    this.isDead = true;
    this.currentImage = 0;
  }
}

