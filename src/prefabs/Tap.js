import { GameObjects, Input } from 'phaser'
import { THEME } from '../main'
import { Storage } from '../utils/storage'

export class Tap extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    this.initialY = y
    this.isFiring = false
    this.moveSpeed = Storage.tapSpeed
    // this.sfxRocket = scene.sound.add('sfx_rocket')

    this.keyF = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.F)
    this.keyLeft = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRight = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)

    scene.input.on('pointermove', (pointer) => {
      this.direction = pointer.x < THEME.width / 2 ? 'left' : 'right'
      // TODO remove direction if pointer is not on canvas
      //console.log(pointer.x)
    })

    scene.input.on('pointerdown', (_) => {
      this.isFiring = true
    })
  }

  update() {
    if (!this.isFiring) {
      if ((this.keyLeft.isDown || this.direction === 'left') && this.x >= this.width) {
        this.x -= this.moveSpeed
      }
      if ((this.keyRight.isDown || this.direction === 'right') && this.x <= THEME.width - this.width) {
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
