import { GameObjects } from 'phaser'
import { Storage } from '../utils/storage'
import { THEME } from '../main'

export class Glas extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, pointValue) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    this.points = pointValue
    this.moveSpeed = Storage.speed
  }

  create() {
    this.play('idle', true)
  }

  update() {
    this.x -= this.moveSpeed
    if (this.x <= 0 - this.width) {
      this.reset()
    }
  }

  reset() {
    this.play('idle', true)
    this.x = THEME.width
  }
}