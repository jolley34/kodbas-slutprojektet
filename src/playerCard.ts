class PlayerCard {
  private name: string;
  private icon: p5.Image;
  private lives: number;
  private positionX: number;
  private positionY: number;
  private playerNumber: number;

  constructor(
    name: string,
    icon: p5.Image,
    lives: number,
    positionX: number,
    positionY: number,
    playerNumber: number
  ) {
    this.name = name;
    this.icon = icon;
    this.lives = lives;
    this.positionX = positionX;
    this.positionY = positionY;
    this.playerNumber = playerNumber;
  }

  public removeLife(): void {
    assets.playerSoundEffects.looselife.play();
    if (this.lives > 0) {
      this.lives--;
    }
  }

  public draw(): void {
    push();
    fill("#5A7885");
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 10;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "black";
    noStroke();
    rectMode(CENTER);
    rect(this.positionX, this.positionY + 50, 250, 150, 10);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = "black";
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 20;
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = "black";

    const heartSpacing = 50;
    const startX = this.positionX - (heartSpacing * (this.lives - 1)) / 2;
    for (let i = 0; i < this.lives; i++) {
      image(
        assets.images.playerCard[0],
        startX + i * heartSpacing - 20,
        this.positionY + 45,
        40,
        40
      );
    }

    let circleCenterX, circleCenterY;
    if (this.playerNumber === 1) {
      circleCenterX = this.positionX + 100;
      circleCenterY = this.positionY + 130;
    } else {
      circleCenterX = this.positionX - 100;
      circleCenterY = this.positionY + 130;
    }

    // Draw player icon
    const circleDiameter = 100;
    const imageOffset = 50;
    fill("#AECDDB");
    circle(circleCenterX, circleCenterY, circleDiameter);
    imageMode(CENTER);
    image(
      this.icon,
      circleCenterX,
      circleCenterY,
      circleDiameter - imageOffset,
      circleDiameter - imageOffset
    );

    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = "black";

    fill("255");
    textSize(30);
    textAlign(CENTER);
    text(this.name, this.positionX, this.positionY);

    pop();
  }

  //public addPowerUp() {}
}
