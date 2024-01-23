/// <reference path="gameEntity.ts" />
class Bomb extends GameEntity {
  public timer: number;
  
  constructor(x: number, y: number, size: number) {
    super(assets.images.entities[3], x, y, size);
    this.timer = 400; // bomb tiden
  }
  public removeFromGame(): void {
    if (this.bombs instanceof GameEntity) {
      this.bombs.removeBomb(this);
    }
  }

}
