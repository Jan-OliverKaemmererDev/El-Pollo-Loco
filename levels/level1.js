let level1;

function initLevel() {
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
  );
}
