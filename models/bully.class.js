class Bully extends MoveableObject{
    constructor(){
        super().loadImage('img/bully1/idle/idle-1.png');

        this.x = 200 + Math.random() * 500;
    }
}