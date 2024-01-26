class PlayerCard {
  name: string;
  // icon: p5.Image;
  lives: number;
  positionX: number;
  positionY: number;

  constructor(
    name: string,
    //icon: p5.Image,
    lives: number,
    positionX: number,
    positionY: number
  ) {
    this.name = name;
    // this.icon = icon;
    this.lives = lives;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  public removeLife() {
    this.lives--;
  }

  public draw() {
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
    fill("#AECDDB");
    circle(this.positionX * 1.38, this.positionY * 3.22, 100);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = "black";

    // Loops through the lives and draws them
    image(
      assets.images.playerCard[0],
      this.positionX * 0.65,
      this.positionY * 1.7,
      40,
      40
    );

    fill("255");
    textSize(30);
    textAlign(RIGHT);
    text(this.name, this.positionX, this.positionY);

    pop();
  }

  public addPowerUp() {}
}
