class BackgroundObject extends MoveableObject {
    width = 720;
    height = 400;
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}

class BackgroundObject2 extends MoveableObject {
    width = 720;
    height = 80;
    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}