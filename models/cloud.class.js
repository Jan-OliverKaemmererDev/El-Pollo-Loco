class Cloud extends MoveableObject{
    y = 10;
    width = 500;
    height = 250;


    constructor(){
        super().loadImage('img/clouds/clouds-combined.png');

        this.x = Math.random() * 500; // Zahl zwischen 200 und 700
    }
}