import { Scene, Input } from 'phaser'
import { THEME } from '../main'
import { Tap } from '../prefabs/Tap'
import { Glas } from '../prefabs/Glas'

export class GameScene extends Scene {
  constructor() {
    super('gameScene')
  }

  create() {
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNames('beer', {
        prefix: 'beer_empty_',
        start: 0,
        end: 3,
      }),
      frameRate: 3,
      repeat: -1,
    })
    this.anims.create({
      key: 'fill',
      frames: this.anims.generateFrameNames('beer', {
        prefix: 'beer_full_',
        start: 0,
        end: 3,
      }),
      frameRate: 8,
      repeat: 0,
    })
    console.log('GameScene')
    this.background = this.add.tileSprite(0, 0, THEME.width, THEME.height, 'background').setOrigin(0, 0)
    this.counter = this.add.tileSprite(0, THEME.height - 50, THEME.width, 50, 'counter').setOrigin(0, 0)

    // TODO I think this should be a group
    this.glas01 = new Glas(this, THEME.width, 50, 'beer', 0, 30).setOrigin(0, 0)
    this.glas02 = new Glas(this, THEME.width + 100, 100, 'beer', 0, 20).setOrigin(0, 0)
    this.glas03 = new Glas(this, THEME.width + 200, 150, 'beer', 0, 10).setOrigin(0, 0)
    this.glas01.play('idle', true)
    this.glas02.play('idle', true)
    this.glas03.play('idle', true)

    // this.test = this.add.sprite(20, 20, 'beer', 'beer_empty_0')

    this.tap = new Tap(this, THEME.width / 2, THEME.height - 100, 'tap').setOrigin(0.5, 0)

    this.keyF = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.F)
    this.keyR = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.R)
    this.keyLeft = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRight = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
  }

  update() {
    if (this.gameOver && Input.Keyboard.JustDown(this.keyR)) {
      this.scene.restart()
    }

    if (this.gameOver && Input.Keyboard.JustDown(this.keyLEFT)) {
      this.scene.start('menuScene')
    }

    //TODO enable again
    this.background.tilePositionX -= 1.5

    if (!this.gameOver) {
      this.tap.update()
      this.glas01.update()
      this.glas02.update()
      this.glas03.update()
    }

    if (this.checkCollision(this.tap, this.glas03)) {
      this.tap.reset()
      this.fillGlas(this.glas03)
    }
    if (this.checkCollision(this.tap, this.glas02)) {
      this.tap.reset()
      this.fillGlas(this.glas02)
    }
    if (this.checkCollision(this.tap, this.glas01)) {
      this.tap.reset()
      this.fillGlas(this.glas01)
    }
  }

  checkCollision(a, b) {
    if (a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.height + a.y > b.y) {
      return true
    } else {
      return false
    }
  }

  fillGlas(glas) {
    const fill = glas.play('fill', false)
    fill.on('animationcomplete', () => {
      glas.reset()
    })
    this.score += glas.points
    console.log(glas.points)
    console.log('Score: ' + Number(this.score))
    //this.scoreLeft.text = this.score
    //this.sound.play('sfx_fill')
  }
}
