import { GameObjects } from 'phaser'
import { Storage } from '../utils/storage'
import { WIDTH } from '../main'

export class Ship extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, pointValue) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    this.points = pointValue
    this.moveSpeed = Storage.speed
  }

  update() {
    this.x -= this.moveSpeed
    if (this.x <= 0 - this.width) {
      this.reset()
    }
  }

  reset() {
    this.x = WIDTH
  }
}
