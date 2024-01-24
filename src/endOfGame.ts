class EndOfGame {
  game: IGamePage;
  displayWinner: string;
  displayScore: number;
  backgroundImage: p5.Image;
  quitButton: Button;
  playAgainButton: Button;

  constructor(game: IGamePage, backgroundImage: p5.Image) {
    this.game = game;
    // Todo: Setup the logic for displaying the winner and score
    this.displayWinner = "";
    this.displayScore = 0;
    this.backgroundImage = backgroundImage;

    // Todo: Choose the right position fot the buttons
    this.quitButton = new Button(
      width / 2 - 100,
      height / 2 + 100,
      170,
      50,
      "QUIT"
    );
    this.playAgainButton = new Button(
      width / 2 + 100,
      height / 2 + 100,
      170,
      50,
      "PLAY AGAIN"
    );
  }

  public draw(): void {
    Utility.drawBackgroundImage(assets.images.backgroundImages[3], 150);
    this.drawBanner();
    this.quitButton.draw();
    this.playAgainButton.draw();
  }

  private drawBanner(): void {
    push();
    fill(0, 0, 0, 180);
    rectMode(CENTER);
    rect(width / 2, height / 2 - 50, 370, 200);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("WINNER", width / 2, height / 2 - 100);
    textSize(24);
    text(this.displayWinner, width / 2, height / 2 - 60);
    text(`SCORE: ${this.displayScore}`, width / 2, height / 2 - 20);
    pop();
  }

  private mousePressed(): void {
    if (this.quitButton.isButtonPressed()) {
      console.log("I quit");
      this.game.changePage("ChooseBoardPage");
      // assets.music.menumusic.play();
    }
    if (this.playAgainButton.isButtonPressed()) {
      console.log("I play again");
      this.game.changePage("GameBoard");
      // assets.music.ingamemusic.play();
    }
  }

  public update(): void {
    this.mousePressed();
  }
}
