let level1;

function initLevel() {
  let collectables = [
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360),
    new Bottle(200 + Math.random() * 2000, 360)
  ];

  const coinGrid = [
    "XXXX X   XXX .XX. X X .XX.   X .XX. .XX. .XX.",
    "X    X   X X X  X X X X  X   X X  X X  X X  X",
    "XXX  X   XXX X  X X X X  X   X X  X X    X  X",
    "X    X   X   X  X X X X  X   X X  X X  X X  X",
    "XXXX X   X   .XX. X X .XX.   X .XX. .XX. .XX."
  ];

  let startX = 400; // start text a bit after spawn
  let startY = 80; 
  let coinSizeX = 60; 
  let coinSizeY = 60; 

  for (let row = 0; row < coinGrid.length; row++) {
    for (let col = 0; col < coinGrid[row].length; col++) {
      if (coinGrid[row][col] === 'X' || coinGrid[row][col] === '.') {
        if (coinGrid[row][col] === 'X') {
          collectables.push(new Coin(startX + col * coinSizeX, startY + row * coinSizeY));
        }
      }
    }
  }

  level1 = new Level(
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new Endboss(),
    ],
    [
      new Cloud('img/5_background/layers/4_clouds/1.png', 0),
      new Cloud('img/5_background/layers/4_clouds/2.png', 700),
      new Cloud('img/5_background/layers/4_clouds/1.png', 1400),
      new Cloud('img/5_background/layers/4_clouds/2.png', 2100),
      new Cloud('img/5_background/layers/4_clouds/1.png', 2800),
      new Cloud('img/5_background/layers/4_clouds/2.png', 3500)
    ],
    [
      new BackgroundObject("img/5_background/layers/air.png", -719),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png",-719,0,),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png",-719, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png",-719, 0),

      new BackgroundObject("img/5_background/layers/air.png", 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 0, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png",0, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 0, 0),

      new BackgroundObject("img/5_background/layers/air.png", 719),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png",719, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png",719, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png",719, 0),

      new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png",719 * 2, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png",719 * 2, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png",719 * 2, 0),

      new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png",719 * 3, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png",719 * 3, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png",719 * 3, 0),

      new BackgroundObject("img/5_background/layers/air.png", 719 * 4),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png",719 * 4, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png",719 * 4, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png",719 * 4, 0),
    ],
    collectables
  );
}

