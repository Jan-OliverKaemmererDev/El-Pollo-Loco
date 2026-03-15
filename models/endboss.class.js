class Endboss extends MoveableObject {

    height = 200;
    width = 150;
    y = 200;

    IMAGES_WALKING = [
        'img/endboss/walk/endboss-walk1.png',
        'img/endboss/walk/endboss-walk2.png',
        'img/endboss/walk/endboss-walk3.png',
        'img/endboss/walk/endboss-walk4.png',
        'img/endboss/walk/endboss-walk5.png',
        'img/endboss/walk/endboss-walk6.png',
        'img/endboss/walk/endboss-walk7.png'
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