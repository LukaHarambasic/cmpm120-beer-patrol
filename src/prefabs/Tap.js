import { GameObjects, Input } from 'phaser'
import { THEME } from '../main'

export class Tap extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    console.log('Tap')
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    this.initialY = y
    this.isFiring = false
    this.moveSpeed = 2
    // this.sfxRocket = scene.sound.add('sfx_rocket')

    this.keyF = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.F)
    this.keyLEFT = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRIGHT = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
  }

  update() {
    if (!this.isFiring) {
      if (this.keyLEFT.isDown && this.x >= 0 + this.width) {
        this.x -= this.moveSpeed
      } else if (this.keyRIGHT.isDown && this.x <= THEME.width - this.width) {
        this.x += this.moveSpeed
      }
    }
    if (Input.Keyboard.JustDown(this.keyF) && !this.isFiring) {
      this.isFiring = true
      // this.sfxRocket.play()
    }
    // if fired, move up
    if (this.isFiring && this.y >= 0) {
      this.y -= this.moveSpeed
    }
    // reset on miss
    if (this.y <= 0) {
      this.reset()
    }
  }

  reset() {
    this.isFiring = false
    this.y = this.initialY
  }
}
