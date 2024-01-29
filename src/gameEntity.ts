class GameEntity {
	public x: number;
	public y: number;
	public image: p5.Image;
	public size: number;
	public shouldBeRemoved: boolean;

	constructor(image: p5.Image, x: number, y: number, size: number) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.size = size;
		this.shouldBeRemoved = false;
	}

	public getHitBox(): any {
		let hitBoxSize = this.size;

		// Check if the object is the player, and adjust the hitbox size accordingly
		if (this instanceof Player || this instanceof SpeedUp) {
			hitBoxSize *= 0.8; // You can adjust the multiplier as needed for the player
		}

		return {
			left: this.x + (this.size - hitBoxSize) / 2,
			top: this.y + (this.size - hitBoxSize) / 2,
			width: hitBoxSize,
			height: hitBoxSize,
		};
	}

	public update(gameBoard: IAddEntity): void {}

	public draw(): void {
		push();
		image(this.image, this.x, this.y, this.size, this.size);

		const hitBox = this.getHitBox();
		stroke("red");
		noFill();
		rect(hitBox.left, hitBox.top, hitBox.width, hitBox.height);
		pop();
	}
}
