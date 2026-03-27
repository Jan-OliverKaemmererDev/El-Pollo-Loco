let canvas;
let world;
let keyboard = new Keyboard();
let soundManager = new SoundManager();

function init() {
  canvas = document.getElementById("canvas");
  initLevel();
  world = new World(canvas, keyboard);

  syncMuteButtons();
  bindMobileControls();

  document.getElementById("mobile-controls").classList.remove("hidden");

  soundManager.playBackgroundMusic();
  soundManager.playChickenSound();
  soundManager.playSmallChickenSound();
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (event.keyCode == 38) {
    keyboard.UP = true;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (event.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (event.keyCode == 38) {
    keyboard.UP = false;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (event.keyCode == 68) {
    keyboard.D = false;
  }
});

function toggleMusic() {
  const btn = document.getElementById("btn-mute-music");
  if (btn && btn.classList.contains("disabled")) return;

  soundManager.isMusicMuted = !soundManager.isMusicMuted;
  localStorage.setItem("isMusicMuted", soundManager.isMusicMuted);
  syncMuteButtons();
  if (soundManager.isMusicMuted) {
    soundManager.pauseBackgroundMusic();
  } else {
    soundManager.playBackgroundMusic();
  }
}

function toggleSounds() {
  const btn = document.getElementById("btn-mute-sounds");
  if (btn && btn.classList.contains("disabled")) return;

  soundManager.isSoundsMuted = !soundManager.isSoundsMuted;
  localStorage.setItem("isSoundsMuted", soundManager.isSoundsMuted);
  syncMuteButtons();
  if (soundManager.isSoundsMuted) {
    soundManager.stopChickenSound();
    soundManager.stopSmallChickenSound();
    soundManager.stopEndbossChickenSound();
    soundManager.stopSnoreSound();
  } else {
    if (world && world.level && world.level.enemies) {
      if (world.level.enemies.some((e) => e instanceof Chicken && !e.isDead)) {
        soundManager.playChickenSound();
      }
      if (
        world.level.enemies.some((e) => e instanceof SmallChicken && !e.isDead)
      ) {
        soundManager.playSmallChickenSound();
      }
      if (world.bossVisible) {
        let endboss = world.level.enemies.find((e) => e instanceof Endboss);
        if (endboss && !endboss.isDead) {
          soundManager.playEndbossChickenSound();
        }
      }
    }
  }
}

function syncMuteButtons() {
  const musicBtn = document.getElementById("btn-mute-music");
  const soundsBtn = document.getElementById("btn-mute-sounds");
  if (musicBtn) {
    if (soundManager.isMusicMuted) {
      musicBtn.classList.add("muted");
    } else {
      musicBtn.classList.remove("muted");
    }
  }
  if (soundsBtn) {
    if (soundManager.isSoundsMuted) {
      soundsBtn.classList.add("muted");
    } else {
      soundsBtn.classList.remove("muted");
    }
  }
}

// Initial sync on page load (before startGame)
document.addEventListener("DOMContentLoaded", syncMuteButtons);

/**
 * Binds touch events to mobile control buttons.
 */
function bindMobileControls() {
  const btnLeft = document.getElementById("btn-mobile-left");
  const btnRight = document.getElementById("btn-mobile-right");
  const btnJump = document.getElementById("btn-mobile-jump");
  const btnThrow = document.getElementById("btn-mobile-throw");

  if (btnLeft) {
    btnLeft.addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.LEFT = true;
    });
    btnLeft.addEventListener("touchend", (e) => {
      e.preventDefault();
      keyboard.LEFT = false;
    });
  }

  if (btnRight) {
    btnRight.addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.RIGHT = true;
    });
    btnRight.addEventListener("touchend", (e) => {
      e.preventDefault();
      keyboard.RIGHT = false;
    });
  }

  if (btnJump) {
    btnJump.addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.SPACE = true;
    });
    btnJump.addEventListener("touchend", (e) => {
      e.preventDefault();
      keyboard.SPACE = false;
    });
  }

  if (btnThrow) {
    btnThrow.addEventListener("touchstart", (e) => {
      e.preventDefault();
      keyboard.D = true;
    });
    btnThrow.addEventListener("touchend", (e) => {
      e.preventDefault();
      keyboard.D = false;
    });
  }

  // Disable context menu on all mobile buttons
  const mobileButtons = document.querySelectorAll(".mobile-btn");
  mobileButtons.forEach((btn) => {
    btn.addEventListener("contextmenu", (e) => e.preventDefault());
  });
}

/**
 * Toggles the additional mobile menu overlay.
 */
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu-overlay");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}
