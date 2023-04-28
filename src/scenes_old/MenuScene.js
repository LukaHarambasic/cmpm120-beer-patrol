import { Scene, Input } from 'phaser'
import { WIDTH, HEIGHT, BORDER_UI_SIZE, BORDER_PADDING, H1, H2 } from '../main'
import { Storage } from '../utils/storage'

export class MenuScene extends Scene {
  constructor() {
    super('menuScene')
  }

  preload() {
    this.load.audio('sfx_select', './audio/blip_select12.wav')
    this.load.audio('sfx_explosion', './audio/explosion38.wav')
    this.load.audio('sfx_rocket', './audio/rocket_shot.wav')
  }

  create() {
    // show menu text
    this.add.text(WIDTH / 2, HEIGHT / 2 - BORDER_UI_SIZE - BORDER_PADDING, 'ROCKET PATROL', H1).setOrigin(0.5)
    this.add.text(WIDTH / 2, HEIGHT / 2, 'Use ←→ arrows to move & (F) to fire', H1).setOrigin(0.5)

    this.add
      .text(WIDTH / 2, HEIGHT / 2 + BORDER_UI_SIZE + BORDER_PADDING, 'Press ← for Novice or → for Expert', H2)
      .setOrigin(0.5)

    // define keys
    // TODO also wierd naming convention fix in modding
    this.keyLEFT = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRIGHT = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
    // psssst just for testing purposes
    this.keyUP = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.UP)
  }

  update() {
    if (Input.Keyboard.JustDown(this.keyLEFT)) {
      this._startGame(3, 60 * 1000)
    }
    if (Input.Keyboard.JustDown(this.keyRIGHT)) {
      this._startGame(4, 45 * 1000)
    }
    if (Input.Keyboard.JustDown(this.keyUP)) {
      this._startGame(4, 1000)
    }
  }

  _startGame(speed, timer) {
    Storage.speed = speed
    Storage.timer = timer
    this.sound.play('sfx_select')
    this.scene.start('gameScene')
  }
}
