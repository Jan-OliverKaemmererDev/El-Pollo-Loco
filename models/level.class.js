class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2150;
    collectableObjects = [];

    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}