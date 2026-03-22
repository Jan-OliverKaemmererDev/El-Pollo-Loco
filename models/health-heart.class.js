class HealthHeart extends MoveableObject {
    height = 50;
    width = 50;

    constructor(x, y) {
        super().loadImage('img/7_statusbars/3_icons/icon_health.png');
        this.x = x;
        this.y = y;
    }
}
