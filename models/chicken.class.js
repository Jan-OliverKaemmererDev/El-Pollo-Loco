class Chicken extends MoveableObject{

    height = 70;
    width= 70;
    y = 350;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    isDead = false;

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate(){
        setInterval(() => {
            if (!this.isDead && this.world) {
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
            if (!this.isDead) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 300);
    }

    die() {
        this.isDead = true;
        this.loadImage('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
    }
}