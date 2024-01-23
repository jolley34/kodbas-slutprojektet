class GameBoard {
  private clouds: Clouds;
  private entities: GameEntity[];
  private backgroundImage: p5.Image;
  private timer: Timer;
  private playerCard1: PlayerCard;
  private playerCard2: PlayerCard;
  // private player1Icon: p5.Image;

  constructor(
    entities: GameEntity[],
    backgroundImage: p5.Image
    //player1Icon: p5.Image,
    //player2Icon: p5.Image
  ) {
    this.clouds = new Clouds();
    this.entities = entities;
    this.backgroundImage = backgroundImage;
    this.timer = new Timer();
    this.playerCard1 = new PlayerCard(
      "Player 1",
      //player1Icon,
      3,
      width / 2 - 550,
      50
    );
    this.playerCard2 = new PlayerCard(
      "Player 2",
      // player2Icon,
      3,
      width / 2 + 550,
      50
    );
  }

  public setupGameBackground() {
    createCanvas(windowWidth, windowHeight);
  }

  public drawGameBackground() {
    image(this.backgroundImage, 0, 0, width, height);
  }

  private checkCollision() {
    for (const entity1 of this.entities) {
      // Identifiera om det är en spelare
      if (entity1 instanceof Player) {
        // Kontrollera om spelaren krockar med något
        for (const entity2 of this.entities) {
          // Kolla inte krockar med andra spelare (inkl sig själv).
          if (entity2 instanceof Player) continue;
          // 1. Identifiera faktiska krockar
          // Definera höger och vänster sida för varje entitet
          const l1 = entity1.x;
          const r1 = entity1.x + entity1.size / 1.75;
          const l2 = entity2.x;
          const r2 = entity2.x + entity2.size / 1.75;
          const t1 = entity1.y;
          const b1 = entity1.y + entity1.size / 1.25;
          const t2 = entity2.y;
          const b2 = entity2.y + entity2.size / 1.75;
          if (l2 < r1 && l1 < r2 && t2 < b1 && t1 < b2) {
            entity1.x -= entity1.speedX;
            entity1.y -= entity1.speedY;
            // 2. Gör rätt sak berode på vad spelare krockar med (reaktionen)
          }
        }
      }
    }
  }
  // om R1 är mindre än L2 så är det ingen krock men om L2 är mindre än R1 har vi KANSKE en krock.
  // R2 är mindre än L1 = ingen krock, men L1 är mindre än R2 är en krock
  // R = x + w
  // L = x
  // en if sats med 4 rader VILL VI HAA, 2 med x och 2 med y

  public update() {
    // Loop over all entities and update them
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }

    // for (const entity of this.entities) {
    //   entity.update();
    // }

    this.checkCollision();
  }

  public startGame() {
    this.timer.start();
  }

  public endGame() {
    this.timer.stop();
  }

  public draw() {
    this.drawGameBackground();

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
      this.timer.drawTimer();
      this.playerCard1.draw();
      this.playerCard2.draw();
    }

    this.clouds.draw();
  }
}

// const entitet = new Obstacle(0,0,10);
// if (entitet instanceof Obstacle) {
//   // reagera baserat på att entiteten är ett hinder...
// }
