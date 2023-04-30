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
    this.load.atlas('beer', './graphics/spritesheet.png', './graphics/sprites.json')
    // how to use sprite sheets: https://github.com/nathanaltice/Sprite-Sheets/blob/master/src/main.js
    this.load.audio('sfx_select', './audio/blip_select12.wav')
  }

  create() {
    this.scene.start('gameScene')
    console.log('titleScene')
    const STYLE_TITLE = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.title,
      backgroundColor: THEME.primary,
      color: THEME.onPrimary,
      align: 'center',
      padding: THEME.textPadding,
      fixedWidth: 0,
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
    this.add.text(THEME.width / 2, 100, 'BEER PATROL', STYLE_TITLE).setOrigin(0.5)
    this.add.text(THEME.width / 2, 200, 'TODO: Disclaimer text and motivation', STYLE_BODY).setOrigin(0.5)
    this.add.text(THEME.width / 2, THEME.height - 50, 'Press any key to continue.', STYLE_BODY).setOrigin(0.5)

    this.input.keyboard.on(
      'keydown',
      () => {
        this.scene.start('menuScene')
      },
      this,
    )
  }
}
