class Bully extends MoveableObject{

    IMAGES_WALKING = [
        'img/bully1/walk/bully-walk1.png',
        'img/bully1/walk/bully-walk2.png',
        'img/bully1/walk/bully-walk3.png',
        'img/bully1/walk/bully-walk4.png'
    ];

    constructor(){
        super().loadImage('img/bully1/walk/bully-walk1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate(){
        this.moveLeft();

        setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
        }, 300);
    }
}