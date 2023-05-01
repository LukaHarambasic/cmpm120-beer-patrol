import { GameObjects } from 'phaser'
import { Storage } from '../utils/storage'
import { THEME } from '../main'

export class Endboss extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, pointValue) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    this.points = pointValue
    this.moveSpeed = Storage.speed * 1.75
  }

  update() {
    this.x -= this.moveSpeed
    if (this.x <= 0 - this.width) {
      console.log('tada')
      this.reset()
    }
  }

  reset() {
    this.play('alcfree', true)
    this.x = THEME.width
  }
}
