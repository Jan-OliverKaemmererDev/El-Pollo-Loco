class Endboss extends MoveableObject {

    height = 350;
    width = 280;
    y = 100;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700;
        this.animate();
    }


    animate(){
        setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
        }, 300);
    }

}