class Bully extends MoveableObject{

    IMAGES_WALKING = [
        'img/bully1/idle/idle-1.png',
        'img/bully1/idle/idle-2.png',
        'img/bully1/idle/idle-3.png',
        'img/bully1/idle/idle-4.png'
    ];

    constructor(){
        super().loadImage('img/bully1/idle/idle-1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate(){
        this.moveLeft();

        setInterval(() => {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 300);
    }
}