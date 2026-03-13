class Character extends MoveableObject {

    speed = 10;

    IMAGES_WALKING = [
        'img/batman/idle/batman-idle1.png',
        'img/batman/idle/batman-idle2.png',
        'img/batman/idle/batman-idle3.png',
        'img/batman/idle/batman-idle4.png'
    ];
    world;

    constructor(){
        super().loadImage('img/batman/idle/batman-idle1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate(){

        setInterval(() => {
            if (this.world.keyboard.RIGHT){
                this.x += this.speed;
            }

            if (this.world.keyboard.LEFT){
                this.x -= this.speed;
            }
        }, 1000 / 60);
    
        setInterval(() => {

        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }
        }, 100);
    }

    jump(){

    }
}