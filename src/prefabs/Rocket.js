import { GameObjects, Input } from 'phaser'
import { BORDER_PADDING, BORDER_UI_SIZE, WIDTH, HEIGHT } from '../main'

export class Rocket extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    this.isFiring = false
    this.moveSpeed = 2
    this.sfxRocket = scene.sound.add('sfx_rocket')

    this.keyF = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.F)
    this.keyLEFT = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRIGHT = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
  }

  // Seems like it isn't called directly, people complained, might be fixed in v4
  // GitHub issue: https://github.com/photonstorm/phaser/issues/3378
  // Solution: https://www.html5gamedevs.com/topic/37637-spriteupdate-method-is-never-called/?do=findComment&comment=214887
  update() {
    if (!this.isFiring) {
      if (this.keyLEFT.isDown && this.x >= BORDER_UI_SIZE + this.width) {
        this.x -= this.moveSpeed
      } else if (this.keyRIGHT.isDown && this.x <= WIDTH - BORDER_UI_SIZE - this.width) {
        this.x += this.moveSpeed
      }
    }
    // fire button
    if (Input.Keyboard.JustDown(this.keyF) && !this.isFiring) {
      this.isFiring = true
      this.sfxRocket.play()
    }
    // if fired, move up
    if (this.isFiring && this.y >= BORDER_UI_SIZE * 3 + BORDER_PADDING) {
      this.y -= this.moveSpeed
    }
    // reset on miss
    if (this.y <= BORDER_UI_SIZE * 3 + BORDER_PADDING) {
      this.reset()
    }
  }

  reset() {
    this.isFiring = false
    this.y = HEIGHT - BORDER_UI_SIZE - BORDER_PADDING
  }
}
