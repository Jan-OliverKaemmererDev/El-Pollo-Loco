class Character extends MoveableObject {

    IMAGES_IDLE = [
            'img/batman/idle/batman-idle1.png',
            'img/batman/idle/batman-idle2.png',
            'img/batman/idle/batman-idle3.png',
            'img/batman/idle/batman-idle4.png'
        ];
        currentImage = 0;

    constructor(){
        super().loadImage('img/batman/idle/batman-idle1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.animate();
    }

    animate(){
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_IDLE.length;
        let path = this.IMAGES_IDLE[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 400);
    }

    jump(){

    }
}