const level1 = new Level(
    [
        new Bully(),
        new Bully(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('img/background/background1.png', -719),
        new BackgroundObject2('img/background/background-city.png', -719, 0),
        new BackgroundObject('img/background/background1.png', 0),
        new BackgroundObject2('img/background/background-city.png', 0, 0),
        new BackgroundObject('img/background/background1.png', 719),
        new BackgroundObject2('img/background/background-city.png', 719, 0),
        new BackgroundObject('img/background/background1.png', 719*2),
        new BackgroundObject2('img/background/background-city.png', 719*2, 0)
    ]
);
