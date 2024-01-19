class ChooseBoard {
  private image: p5.Image;
  private gardenBoard: p5.Image;
  private iceBoard: p5.Image;
  private game: Game;
  private gardenBoardButton: Button;
  private iceBoardButton: Button;

  constructor(game: Game) {
    this.image = loadImage("../assets/background/Controls.svg");
    this.gardenBoard = loadImage("../assets/background/cruel_nature_bg1.png");
    this.iceBoard = loadImage("../assets/background/winter_background.png");
    this.game = game;
    this.gardenBoardButton = new Button(
      width / 4 + 130,
      height / 2 + 270,
      250,
      50,
      "Garden Board"
    );
    this.iceBoardButton = new Button(
      width / 4 + width / 2 - 130,
      height / 2 + 270,
      250,
      50,
      "Ice Board"
    );
  }

  public update() {
    if (this.gardenBoardButton.isButtonPressed()) {
      this.handleGardenBoardSelection();
    }

    if (this.iceBoardButton.isButtonPressed()) {
      this.handleIceBoardSelection();
    }
  }

  private handleGardenBoardSelection() {
    const gardenBoardNumber = this.chooseGardenBoard();
    this.game.changePage("GameBoard", gardenBoardNumber);
  }

  private handleIceBoardSelection() {
    const iceBoardNumber = this.chooseIceBoard();
    this.game.changePage("GameBoard", iceBoardNumber);
  }

  public chooseGardenBoard() {
    return 1;
  }

  public chooseIceBoard(): number {
    return 2;
  }

  public draw() {
    drawBackgroundImage(assets.images.backgroundImages[0], 150);
    push();
    textSize(64);
    const padding = 100;
    const rectHeight = 100;
    const offsetY = 140;
    const rectWidth = textWidth("Cruel Nature") + padding * 2;

    const rectX = width / 2 - rectWidth / 2;
    const rectY = height / 4 - rectHeight / 2 - offsetY;

    fill(0);
    noStroke();
    rect(rectX, rectY, rectWidth, rectHeight, 10);

    fill("#B3D917");
    textAlign(CENTER, CENTER);
    text("Cruel Nature", width / 2, height / 4 - offsetY);
    pop();

    image(this.image, width / 4, height / 4, width / 2, height / 2);

    this.gardenBoardButton.draw();
    this.iceBoardButton.draw();
  }
}
