import { Scene, Input } from 'phaser'
import { WIDTH, HEIGHT, BORDER_UI_SIZE, BORDER_PADDING, SCORE, GAME_OVER } from '../main'
import { Rocket } from '../prefabs/Rocket'
import { Ship } from '../prefabs/Ship'
import { Storage } from '../utils/storage'

export class GameScene extends Scene {
  constructor() {
    super('gameScene')
  }

  preload() {
    this.load.image('rocket', './graphics/rocket.png')
    this.load.image('spaceship', './graphics/spaceship.png')
    this.load.image('starfield', './graphics/starfield.png')
    this.load.spritesheet('explosion', './graphics/explosion.png', {
      frameWidth: 64,
      frameHeight: 32,
      startFrame: 0,
      endFrame: 9,
    })
  }

  create() {
    // background
    this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0)

    // ui
    this.add.rectangle(0, BORDER_UI_SIZE + BORDER_PADDING, WIDTH, BORDER_UI_SIZE * 2, 0x00ff00).setOrigin(0, 0)
    this.add.rectangle(0, 0, WIDTH, BORDER_UI_SIZE, 0xffffff).setOrigin(0, 0)
    this.add.rectangle(0, HEIGHT - BORDER_UI_SIZE, WIDTH, BORDER_UI_SIZE, 0xffffff).setOrigin(0, 0)
    this.add.rectangle(0, 0, BORDER_UI_SIZE, HEIGHT, 0xffffff).setOrigin(0, 0)
    this.add.rectangle(WIDTH - BORDER_UI_SIZE, 0, BORDER_UI_SIZE, HEIGHT, 0xffffff).setOrigin(0, 0)

    // define keys
    this.keyF = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.F)
    this.keyR = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.R)
    this.keyLEFT = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRIGHT = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)

    // rocket
    this.p1Rocket = new Rocket(this, WIDTH / 2, HEIGHT - BORDER_UI_SIZE - BORDER_PADDING, 'rocket').setOrigin(0.5, 0)

    // ships
    this.ship01 = new Ship(this, WIDTH + BORDER_UI_SIZE * 6, BORDER_UI_SIZE * 4, 'spaceship', 0, 30).setOrigin(0, 0)
    this.ship02 = new Ship(
      this,
      WIDTH + BORDER_UI_SIZE * 3,
      BORDER_UI_SIZE * 5 + BORDER_PADDING * 2,
      'spaceship',
      0,
      20,
    ).setOrigin(0, 0)
    this.ship03 = new Ship(this, WIDTH, BORDER_UI_SIZE * 6 + BORDER_PADDING * 4, 'spaceship', 0, 10).setOrigin(0, 0)

    // animation
    // TODO also could be a helper function
    if (!this.anims.exists('explode')) {
      this.anims.create({
        key: 'explode',
        frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0 }),
        frameRate: 30,
      })
    }

    // score
    this.p1Score = 0
    this.scoreLeft = this.add.text(
      BORDER_UI_SIZE + BORDER_PADDING,
      BORDER_UI_SIZE + BORDER_PADDING * 2,
      this.p1Score,
      SCORE,
    )

    // game over flag
    this.gameOver = false

    // clock
    this.clock = this.time.delayedCall(
      Storage.timer,
      () => {
        this.add.text(WIDTH / 2, HEIGHT / 2, 'GAME OVER', GAME_OVER).setOrigin(0.5)
        this.add.text(WIDTH / 2, HEIGHT / 2 + 64, 'Press (R) to Restart or ← to Menu', GAME_OVER).setOrigin(0.5)
        this.gameOver = true
      },
      null,
      this,
    )
  }

  update() {
    if (this.gameOver && Input.Keyboard.JustDown(this.keyR)) {
      this.scene.restart()
    }

    if (this.gameOver && Input.Keyboard.JustDown(this.keyLEFT)) {
      this.scene.start('menuScene')
    }

    this.starfield.tilePositionX -= 4

    if (!this.gameOver) {
      this.p1Rocket.update()
      this.ship01.update()
      this.ship02.update()
      this.ship03.update()
    }

    if (this.checkCollision(this.p1Rocket, this.ship03)) {
      this.p1Rocket.reset()
      this.shipExplode(this.ship03)
    }
    if (this.checkCollision(this.p1Rocket, this.ship02)) {
      this.p1Rocket.reset()
      this.shipExplode(this.ship02)
    }
    if (this.checkCollision(this.p1Rocket, this.ship01)) {
      this.p1Rocket.reset()
      this.shipExplode(this.ship01)
    }
  }

  checkCollision(rocket, ship) {
    if (
      rocket.x < ship.x + ship.width &&
      rocket.x + rocket.width > ship.x &&
      rocket.y < ship.y + ship.height &&
      rocket.height + rocket.y > ship.y
    ) {
      return true
    } else {
      return false
    }
  }

  shipExplode(ship) {
    ship.alpha = 0
    let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0)
    boom.anims.play('explode')
    boom.on('animationcomplete', () => {
      ship.reset()
      ship.alpha = 1
      boom.destroy()
    })
    this.p1Score += ship.points
    this.scoreLeft.text = this.p1Score
    this.sound.play('sfx_explosion')
  }
}
