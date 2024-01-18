//---- GLOBAL VARIABLES ----//
let game: Game;
let assets: {
  images: {
    background: p5.Image;
    clouds: p5.Image[];
  };
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  assets = {
    images: {
      background: loadImage("./assets/background/Map1-blurred.png"),
      obstacle: loadImage("./assets/maptextures/brick_block.png"),
      clouds: [
        loadImage("./assets/clouds/smoke1.png"),
        loadImage("./assets/clouds/smoke2.png"),
        loadImage("./assets/clouds/smoke3.png"),
        loadImage("./assets/clouds/smoke4.png"),
      ],
    },
  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
