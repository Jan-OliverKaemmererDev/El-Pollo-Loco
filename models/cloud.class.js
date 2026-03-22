class Cloud extends MoveableObject{
    y = 10;
    width = 600;
    height = 250;


    constructor(imagePath = 'img/5_background/layers/4_clouds/1.png', x = Math.random() * 500){
        super().loadImage(imagePath);

        this.x = x; 
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}