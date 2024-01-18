class Obstacle extends GameEntity {
  private blockSize: number;

  constructor(x: number, y: number, blockSize: number) {
    super(x, y);
    this.blockSize = blockSize;
  }

  public draw() {
    fill(144, 238, 144);
    rect(this.x, this.y, this.blockSize, this.blockSize);
  }
}
