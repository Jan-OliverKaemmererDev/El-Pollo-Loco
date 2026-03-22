class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.speedY = 0;
                if(this instanceof ThrowableObject) {
                    this.y = 360;
                } else {
                    this.y = 250;
                }
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject) {
            return this.y < 360;
        } else {
            return this.y < 250;
        }
    }

    isColliding(mo) {
        let moOffsetTop = mo.offset ? mo.offset.top : 0;
        let moOffsetBottom = mo.offset ? mo.offset.bottom : 0;
        let moOffsetLeft = mo.offset ? mo.offset.left : 0;
        let moOffsetRight = mo.offset ? mo.offset.right : 0;

        return this.x + this.width - this.offset.right > mo.x + moOffsetLeft &&
               this.y + this.height - this.offset.bottom > mo.y + moOffsetTop &&
               this.x + this.offset.left < mo.x + mo.width - moOffsetRight &&
               this.y + this.offset.top < mo.y + mo.height - moOffsetBottom;
    }

    hit(){
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; // Differenz in ms
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed < 1;
    }

    isDead(){
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 30;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}