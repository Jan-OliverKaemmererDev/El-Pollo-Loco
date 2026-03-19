class SmallChicken extends Chicken {
    height = 50;
    width = 50;
    y = 370;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor() {
        super();
        this.loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700 + Math.random() * 1000;
        this.speed = 0.5 + Math.random() * 2;
    }

    die() {
        this.isDead = true;
        this.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
    }
}
