class Character extends MoveableObject {
    height = 180;
    width = 100;
    speed = 10;
    y = 250;
    offset = {
        top: 100,
        left: 20,
        right: 20,
        bottom: 10
    };

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGE_DEAD_FINAL = 'img/2_character_pepe/5_dead/D-57.png';

    world;
    idleTimer = 0;

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.applyGravity();
        this.animate();
    }

    isDeadAnimationTriggered = false;

    animate() {
        setInterval(() => {
            if (!this.isDead() && !this.world.isEndbossDead()) {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.idleTimer = 0;
                }

                if (this.world.keyboard.LEFT && this.x > -600) {
                    this.moveLeft();
                    this.otherDirection = true;
                    this.idleTimer = 0;
                }

                if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                    this.jump();
                    this.idleTimer = 0;
                }
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        // Walking and Hurt animation (100ms)
        setInterval(() => {
            if (this.isDead() || this.world.isEndbossDead()) return;

            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.idleTimer = 0;
            } else if (!this.isAboveGround()) {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                    this.idleTimer = 0;
                }
            }
        }, 100);

        // Jump, Idle and Death animation (200ms)
        setInterval(() => {
            if (this.isDead()) {
                if (!this.isDeadAnimationTriggered) {
                    this.isDeadAnimationTriggered = true;
                    this.currentImage = 0;
                    setTimeout(() => {
                        this.world.showGameOverScreen();
                    }, (this.IMAGES_DEAD.length * 200) + 500);
                }

                if (this.currentImage < this.IMAGES_DEAD.length) {
                    this.playAnimation(this.IMAGES_DEAD);
                } else {
                    this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
                }
            } else if (this.world.isEndbossDead()) {
                return;
            } else if (this.isAboveGround() && !this.isHurt()) {
                this.playAnimation(this.IMAGES_JUMPING);
                this.idleTimer = 0;
            } else if (!this.isHurt()) {
                this.idleTimer += 200;
                if (this.idleTimer > 2000) {
                    this.playAnimation(this.IMAGES_LONG_IDLE);
                } else {
                    this.playAnimation(this.IMAGES_IDLE);
                }
            }
        }, 200);
    }

    jump() {
        this.speedY = 30;
        this.idleTimer = 0;
    }

    bounce() {
        this.speedY = 15;
        this.idleTimer = 0;
    }
}
