class EndbossBar extends StatusBar {

    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 520;
        this.y = 10;
        this.width = 160;
        this.height = 40;
        this.setPercentage(100);
    }
}
