class ChooseBoard {
  private image: p5.Image;
  private game: Game;
  private gardenBoardButton: Button;
  private iceBoardButton: Button;

  constructor(game: Game) {
    this.image = assets.images.backgroundImages[0];

    this.game = game;
    this.gardenBoardButton = new Button(
      width / 4 + 130,
      height / 2 + 300,
      250,
      60,
      "GARDEN  BOARD",
      "black",
      "#B3D917",
      "#302f2f"
    );
    this.iceBoardButton = new Button(
      width / 4 + width / 2 - 130,
      height / 2 + 300,
      250,
      60,
      "ICE  BOARD",
      "black",
      "#B3D917",
      "#302f2f"
    );
  }

  public update(): void {
    if (this.gardenBoardButton.isButtonPressed()) {
      this.handleGardenBoardSelection();
    }

    if (this.iceBoardButton.isButtonPressed()) {
      this.handleIceBoardSelection();
    }
  }

  private handleGardenBoardSelection(): void {
    const gardenBoardNumber = this.chooseGardenBoard();
    this.game.changePage("GameBoard", gardenBoardNumber);
    assets.music.ingamemusic.setVolume(0.2);
    assets.music.ingamemusic.play();
    assets.music.menumusic.stop();
  }

  private handleIceBoardSelection(): void {
    const iceBoardNumber = this.chooseIceBoard();
    this.game.changePage("GameBoard", iceBoardNumber);
    assets.music.ingamemusic.setVolume(0.2);
    assets.music.ingamemusic.play();
    assets.music.menumusic.stop();
  }

  public chooseGardenBoard(): number {
    return 1;
  }

  public chooseIceBoard(): number {
    return 2;
  }

  public draw(): void {
    Utility.drawBackgroundImage(assets.images.backgroundImages[3], 120);
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

    image(this.image, width / 4 - 50, height / 4, width / 2 + 100, height / 2);

    this.gardenBoardButton.draw();
    this.iceBoardButton.draw();
  }
}
