import { Scene, Input } from 'phaser'
import { THEME } from '../main'
import { Tap } from '../prefabs/Tap'
import { Enemy } from '../prefabs/Enemy'
import { Endboss } from '../prefabs/Endboss'
import { Storage } from '../utils/storage'

export class GameScene extends Scene {
  constructor() {
    super('gameScene')
  }

  create() {
    console.log('gameScene')
    this.score = 0
    this.countdown = Storage.initialCountdown
    this.isScoreSet = false
    console.log('countdown', this.countdown)

    // background
    this.background = this.add.tileSprite(0, 0, THEME.width, THEME.height, 'background').setOrigin(0, 0)
    this.counter = this.add.tileSprite(0, THEME.height - 50, THEME.width, 50, 'counter').setOrigin(0, 0)

    const STYLE_BODY = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.body,
      backgroundColor: THEME.primary,
      color: THEME.onPrimary,
      align: 'center',
      padding: THEME.textPadding,
      fixedWidth: 80,
    }
    this.scoreBox = this.add.text(10, THEME.height - 40, this.score, STYLE_BODY).setOrigin(0, 0)
    this.countdownBox = this.add
      .text(THEME.width - 80 - 10, THEME.height - 40, this.countdown, STYLE_BODY)
      .setOrigin(0, 0)

    this.enemy01 = new Enemy(this, THEME.width, 5, 'beer', 0, 30).setOrigin(0, 0)
    this.enemy02 = new Enemy(this, THEME.width + 100, 55, 'beer', 0, 20).setOrigin(0, 0)
    this.enemy03 = new Enemy(this, THEME.width + 200, 105, 'beer', 0, 10).setOrigin(0, 0)
    this.endboss = new Endboss(this, THEME.width + 200, 175, 'beer', 0, 80).setOrigin(0, 0)
    // as everything is one sprite sheet, we need to play the animation to get the correct frame
    this.enemy01.play('empty', true)
    this.enemy02.play('empty', true)
    this.enemy03.play('empty', true)
    this.endboss.play('alcfree', true)

    this.tap = new Tap(this, THEME.width / 2, THEME.height - 100, 'tap').setOrigin(0.5, 0)

    this.keyF = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.F)
    this.keyR = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.R)
    this.keyLeft = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRight = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.countdown--
        this.countdownBox.text = this.countdown
      },
      loop: true,
    })
  }

  update() {
    this.background.tilePositionX -= 1.5
    const isGameOver = this.countdown <= 0
    if (isGameOver && !this.isScoreSet) {
      // console.log('game over')
      Storage.currentScore = this.score
      Storage.tryHighscore(this.score)
      this.isScoreSet = true
      this.scene.stop()
      this.scene.start('highscoreScene')
    }
    if (!isGameOver) {
      // console.log('not game over')
      this.tap.update()
      this.endboss.update()
      this.enemy01.update()
      this.enemy02.update()
      this.enemy03.update()
    }

    if (this._checkCollision(this.tap, this.endboss)) {
      this.tap.reset()
      this._collision(this.endboss)
    }
    if (this._checkCollision(this.tap, this.enemy01)) {
      this.tap.reset()
      this._collision(this.enemy01)
    }
    if (this._checkCollision(this.tap, this.enemy02)) {
      this.tap.reset()
      this._collision(this.enemy02)
    }
    if (this._checkCollision(this.tap, this.enemy03)) {
      this.tap.reset()
      this._collision(this.enemy03)
    }
  }

  _checkCollision(a, b) {
    if (a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.height + a.y > b.y) {
      return true
    } else {
      return false
    }
  }

  _collision(enemy) {
    const animation = enemy.play('fill', false)
    animation.on('animationcomplete', () => {
      enemy.reset()
    })
    this.score += enemy.points
    this.scoreBox.text = this.score
    this.countdown = Number(this.countdown) + Number(Storage.countdownBonus)
    //this.sound.play('sfx_fill')
  }
}
