//---- GLOBAL VARIABLES ----//
let game: Game;
let assets: {
  music: {
    ingamemusic: p5.SoundFile;
    menumusic: p5.SoundFile;
  };
  images: {
    maptextures: p5.Image[];
    playeranimation: p5.Image;
    backgroundImages: p5.Image[];
    clouds: p5.Image[];
  };
};

let customFont: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  customFont = loadFont("../Fonts/MinecraftBold-nMK1.otf");
  assets = {
    music: {
      ingamemusic: loadSound("../assets/music/ingamemusic.mp3"),
      menumusic: loadSound("../assets/music/menumusic.mp3"),
    },
    images: {
      playeranimation: loadImage("./assets/playeranimations/george.png"),
      maptextures: [loadImage("./assets/maptextures/bush.png")],
      backgroundImages: [
        loadImage("../assets/background/cruel_nature_bg1.png"),
        loadImage("../assets/background/Map1 - blurred.png"),
        loadImage("../assets/background/winter_background.png"),
      ],
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
  textFont(customFont);
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
