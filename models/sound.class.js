class SoundManager {
  backgroundMusic = new Audio("audio/elpolloloco-background-music.mp3");
  bottleThrowSound = new Audio("audio/throwing-bottle.mp3");
  bottleShatterSound = new Audio("audio/bottle-shattering.mp3");
  chickenSound = new Audio("audio/chicken-sound.mp3");
  smallChickenSound = new Audio("audio/chicken-small-sound.mp3");
  snoreSound = new Audio("audio/snore-sound.mp3");

  constructor() {
    this.backgroundMusic.loop = true;
    this.bottleThrowSound.loop = true;
    this.chickenSound.loop = true;
    this.smallChickenSound.loop = true;
    this.snoreSound.loop = true;
  }

  playSnoreSound() {
    if (this.snoreSound.paused) {
      this.snoreSound.play().catch((e) => console.warn(e));
    }
  }

  stopSnoreSound() {
    if (!this.snoreSound.paused) {
      this.snoreSound.pause();
    }
  }

  playChickenSound() {
    this.chickenSound.play().catch((e) => console.warn(e));
  }

  stopChickenSound() {
    this.chickenSound.pause();
  }

  playSmallChickenSound() {
    this.smallChickenSound.play().catch((e) => console.warn(e));
  }

  stopSmallChickenSound() {
    this.smallChickenSound.pause();
  }

  playBackgroundMusic() {
    this.backgroundMusic.play().catch((e) => {
      console.warn("Autoplay prevented:", e);
    });
  }

  pauseBackgroundMusic() {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
  }

  playBottleThrowSound() {
    this.bottleThrowSound.currentTime = 0;
    this.bottleThrowSound.play().catch((e) => console.warn(e));
  }

  stopBottleThrowSound() {
    this.bottleThrowSound.pause();
    this.bottleThrowSound.currentTime = 0;
  }

  playBottleShatterSound() {
    this.bottleShatterSound.currentTime = 0;
    this.bottleShatterSound.play().catch((e) => console.warn(e));
  }
}
