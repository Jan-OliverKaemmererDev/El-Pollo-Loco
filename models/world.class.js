class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  bottleBar = new BottleBar();
  bossBar = new EndbossBar();
  coinBar = new CoinBar();
  bossVisible = false;
  throwableObjects = [];
  throwCooldown = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
    this.level.enemies.forEach((enemy) => {
      enemy.world = this;
    });
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkBottleCollisions();
      this.checkBottleHitsEnemy();
      this.checkBottleHitsGround();
      this.checkBossVisibility();
    }, 1000 / 60);
  }

  checkBossVisibility() {
    if (this.character.x > 2300) {
      this.bossVisible = true;
    }
  }

  checkThrowObjects() {
    if (
      this.keyboard.D &&
      !this.throwCooldown &&
      this.bottleBar.percentage > 0
    ) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100,
      );
      this.throwableObjects.push(bottle);
      this.bottleBar.setPercentage(this.bottleBar.percentage - 20);
      this.throwCooldown = true;
      setTimeout(() => {
        this.throwCooldown = false;
      }, 500); // 500ms Cooldown
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (
          this.character.speedY < 0 &&
          this.character.isAboveGround() &&
          enemy instanceof Chicken &&
          !enemy.isDead
        ) {
          // Draufspringen
          enemy.die();
          this.character.bounce();
          setTimeout(() => {
            let index = this.level.enemies.indexOf(enemy);
            if (index > -1) {
              this.level.enemies.splice(index, 1);
              if (Math.random() < 0.5) {
                this.level.collectableObjects.push(new Bottle(enemy.x, 360));
              } else {
                this.level.collectableObjects.push(new HealthHeart(enemy.x, 360));
              }
            }
          }, 200);
        } else if (!enemy.isDead && !this.character.isHurt() && !this.isEndbossDead()) {
          // Normaler Treffer
          if (enemy instanceof Endboss) {
            this.character.hit(10);
          } else {
            this.character.hit(5);
          }
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
  }

  // Check bottle collisions
  checkBottleCollisions() {
    this.level.collectableObjects.forEach((item, index) => {
      if (this.character.isColliding(item) && item instanceof Bottle) {
        this.level.collectableObjects.splice(index, 1);
        let newPercentage = this.bottleBar.percentage + 20;
        if (newPercentage > 100) newPercentage = 100;
        this.bottleBar.setPercentage(newPercentage);
      } else if (this.character.isColliding(item) && item instanceof Coin) {
        this.level.collectableObjects.splice(index, 1);
        let newPercentage = this.coinBar.percentage + 2; // Each coin gives a little percentage
        if (newPercentage > 100) newPercentage = 100;
        this.coinBar.setPercentage(newPercentage);
      } else if (this.character.isColliding(item) && item instanceof HealthHeart) {
        this.level.collectableObjects.splice(index, 1);
        this.character.energy += 20;
        if (this.character.energy > 100) {
            this.character.energy = 100;
        }
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

  checkBottleHitsEnemy() {
    this.throwableObjects.forEach((bottle, bIndex) => {
      this.level.enemies.forEach((enemy) => {
        if (bottle.isColliding(enemy) && !enemy.isDead && !bottle.isSplashed) {
          if (enemy instanceof Chicken) {
            enemy.die();
            bottle.splash();
            setTimeout(() => {
              this.throwableObjects.splice(bIndex, 1);
            }, 300);
            setTimeout(() => {
              let index = this.level.enemies.indexOf(enemy);
              if (index > -1) {
                this.level.enemies.splice(index, 1);
                if (Math.random() < 0.5) {
                  this.level.collectableObjects.push(new Bottle(enemy.x, 360));
                } else {
                  this.level.collectableObjects.push(new HealthHeart(enemy.x, 360));
                }
              }
            }, 200);
          } else if (enemy instanceof Endboss) {
            enemy.energy -= 20;
            if (enemy.energy < 0) enemy.energy = 0;
            this.bossBar.setPercentage(enemy.energy);
            enemy.playHurt();
            bottle.splash();
            setTimeout(() => {
              this.throwableObjects.splice(bIndex, 1);
            }, 300);
            if (enemy.energy == 0) {
              enemy.die();
              setTimeout(() => {
                showWin();
              }, 500);
            }
          }
        }
      });
    });
  }

  checkBottleHitsGround() {
    this.throwableObjects.forEach((bottle) => {
      if (bottle.y >= 360 && !bottle.isSplashed) {
        bottle.splash();
        setTimeout(() => {
          let index = this.throwableObjects.indexOf(bottle);
          if (index > -1) {
            this.throwableObjects.splice(index, 1);
          }
        }, 300);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x, 0);
    // ------ Space for fixed objects -----
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
    if (this.bossVisible) {
      this.addToMap(this.bossBar);
    }
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);

    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.collectableObjects);
    this.addObjectsToMap(this.throwableObjects);

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  showGameOverScreen() {
    // Call global function located in landing.js
    if (typeof showGameOver === "function") {
      showGameOver();
    }
  }

  isEndbossDead() {
    let endboss = this.level.enemies.find(e => e instanceof Endboss);
    return endboss ? endboss.isDead : false;
  }
}

