class SoundManager {
  backgroundMusic = new Audio("audio/elpolloloco-background-music.mp3");
  bottleThrowSound = new Audio("audio/throwing-bottle.mp3");
  bottleShatterSound = new Audio("audio/bottle-shattering.mp3");
  chickenSound = new Audio("audio/chicken-sound.mp3");
  smallChickenSound = new Audio("audio/chicken-small-sound.mp3");
  snoreSound = new Audio("audio/snore-sound.mp3");
  smashSound = new Audio("audio/smash-sound.mp3");
  coinCollectSound = new Audio("audio/coin-collect.mp3");
  winSound = new Audio("audio/win-sound.mp3");
  gameOverSound = new Audio("audio/game-over-sound.mp3");
  ouchSound = new Audio("audio/ouch-sound.mp3");
  endbossGrowlSound = new Audio("audio/endboss-growl.mp3");
  endbossChickenSound = new Audio("audio/endboss-chicken-sound.mp3");
  
  isMusicMuted = false;
  isSoundsMuted = false;

  constructor() {
    this.backgroundMusic.loop = true;
    this.bottleThrowSound.loop = true;
    this.chickenSound.loop = true;
    this.smallChickenSound.loop = true;
    this.snoreSound.loop = true;
    this.endbossChickenSound.loop = true;

    this.isMusicMuted = localStorage.getItem("isMusicMuted") === "true";
    this.isSoundsMuted = localStorage.getItem("isSoundsMuted") === "true";
  }

  playEndbossGrowlSound() {
    if (this.isSoundsMuted) return;
    this.endbossGrowlSound.currentTime = 0;
    this.endbossGrowlSound.play().catch((e) => console.warn(e));
  }

  playEndbossChickenSound() {
    if (this.isSoundsMuted) return;
    if (this.endbossChickenSound.paused) {
      this.endbossChickenSound.play().catch((e) => console.warn(e));
    }
  }

  stopEndbossChickenSound() {
    this.endbossChickenSound.pause();
  }

  playOuchSound() {
    if (this.isSoundsMuted) return;
    this.ouchSound.currentTime = 0; 
    this.ouchSound.play().catch((e) => console.warn(e));
  }

  playWinSound() {
    if (this.isSoundsMuted) return;
    this.winSound.currentTime = 0;
    this.winSound.play().catch((e) => console.warn(e));
  }

  playGameOverSound() {
    if (this.isSoundsMuted) return;
    this.gameOverSound.currentTime = 0;
    this.gameOverSound.play().catch((e) => console.warn(e));
  }

  playCoinCollectSound() {
    if (this.isSoundsMuted) return;
    this.coinCollectSound.currentTime = 0; 
    this.coinCollectSound.play().catch((e) => console.warn(e));
  }

  playSmashSound() {
    if (this.isSoundsMuted) return;
    this.smashSound.currentTime = 0; 
    this.smashSound.play().catch((e) => console.warn(e));
  }

  playSnoreSound() {
    if (this.isSoundsMuted) return;
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
    if (this.isSoundsMuted) return;
    this.chickenSound.play().catch((e) => console.warn(e));
  }

  stopChickenSound() {
    this.chickenSound.pause();
  }

  playSmallChickenSound() {
    if (this.isSoundsMuted) return;
    this.smallChickenSound.play().catch((e) => console.warn(e));
  }

  stopSmallChickenSound() {
    this.smallChickenSound.pause();
  }

  playBackgroundMusic() {
    if (this.isMusicMuted) return;
    this.backgroundMusic.play().catch((e) => {
      console.warn("Autoplay prevented:", e);
    });
  }

  pauseBackgroundMusic() {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
  }

  playBottleThrowSound() {
    if (this.isSoundsMuted) return;
    this.bottleThrowSound.currentTime = 0;
    this.bottleThrowSound.play().catch((e) => console.warn(e));
  }

  stopBottleThrowSound() {
    this.bottleThrowSound.pause();
    this.bottleThrowSound.currentTime = 0;
  }

  playBottleShatterSound() {
    if (this.isSoundsMuted) return;
    this.bottleShatterSound.currentTime = 0;
    this.bottleShatterSound.play().catch((e) => console.warn(e));
  }

  stopAllGameplaySounds() {
    this.stopChickenSound();
    this.stopSmallChickenSound();
    this.stopEndbossChickenSound();
    this.stopSnoreSound();
    this.stopBottleThrowSound();
  }
}
