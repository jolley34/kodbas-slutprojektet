class SpeedUp extends GameEntity {
  constructor(x: number, y: number, size: number) {
    super(assets.images.powerups[0], x, y, size);
  }
}
class SlowDownOpponent extends GameEntity {
  constructor(x: number, y: number, size: number) {
    super(assets.images.powerups[1], x, y, size);
  }
}
