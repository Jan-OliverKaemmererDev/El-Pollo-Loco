class Bottle extends MoveableObject {
    height = 60;
    width = 50;

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
    }
}
