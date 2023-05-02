import { Scene } from 'phaser'
import { THEME } from '../main'

export class TitleScene extends Scene {
  constructor() {
    super('titleScene')
  }

  preload() {
    // global asset loading
    this.load.image('background', './graphics/background.png')
    this.load.image('tap', './graphics/tap.png')
    this.load.image('counter', './graphics/counter.png')
    this.load.image('bretzel', './graphics/bretzel.png')
    this.load.atlas('beer', './graphics/spritesheet.png', './graphics/sprites.json')
    this.load.audio('sfx1', './audio/sfx1.wav')
    this.load.audio('sfx2', './audio/sfx2.wav')
    this.load.audio('sfx3', './audio/sfx3.wav')
    this.load.audio('sfx4', './audio/sfx4.wav')
  }

  create() {
    console.log('titleScene')
    this.anims.create({
      key: 'empty',
      frames: this.anims.generateFrameNames('beer', {
        prefix: 'beer_empty_',
        start: 0,
        end: 3,
      }),
      frameRate: 3,
      repeat: -1,
    })
    this.anims.create({
      key: 'alcfree',
      frames: this.anims.generateFrameNames('beer', {
        prefix: 'beer_00_',
        start: 0,
        end: 3,
      }),
      frameRate: 8,
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

    const STYLE_TITLE = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.title,
      backgroundColor: THEME.primary,
      color: THEME.onPrimary,
      align: 'center',
      padding: THEME.textPadding,
      fixedWidth: 0,
    }
    const STYLE_CONTENT = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.body,
      backgroundColor: THEME.primary,
      color: THEME.onPrimary,
      align: 'center',
      padding: THEME.textPadding,
      fixedWidth: 520,
      wordWrap: {
        width: 520,
        useAdvancedWrap: true,
      },
    }
    const STYLE_BODY = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.body,
      backgroundColor: THEME.primary,
      color: THEME.onPrimary,
      align: 'center',
      padding: THEME.textPadding,
      fixedWidth: 0,
    }

    this.background = this.add.tileSprite(0, 0, THEME.width, THEME.height, 'background').setOrigin(0, 0)

    this.add.text(THEME.width / 2, 100, 'Beer Patrol', STYLE_TITLE).setOrigin(0.5)
    this.add
      .text(
        THEME.width / 2,
        250,
        '"Beer Patrol" is a satirical party game that pokes fun at common German stereotypes in a lighthearted way. Players take on various silly challenges and tasks that playfully parody German culture and traditions, without promoting alcohol consumption or any other harmful behavior.',
        STYLE_CONTENT,
      )
      .setOrigin(0.5)
    this.add.text(THEME.width / 2, THEME.height - 50, 'Press any key to continue.', STYLE_BODY).setOrigin(0.5)

    const b1 = (this.counter = this.add.tileSprite(50, 70, 60, 45, 'bretzel').setOrigin(0, 0))
    b1.angle = -15
    const b2 = (this.counter = this.add.tileSprite(THEME.width - 100, 105, 60, 45, 'bretzel').setOrigin(0, 0))
    b2.angle = 20
    const b3 = (this.counter = this.add.tileSprite(270, 380, 60, 45, 'bretzel').setOrigin(0, 0))
    b3.angle = -15

    this.input.keyboard.on(
      'keydown',
      () => {
        const randomNumber = Math.floor(Math.random() * 4) + 1
        this.sound.play(`sfx${randomNumber}`)
        this.scene.start('menuScene')
      },
      this,
    )
  }
}
