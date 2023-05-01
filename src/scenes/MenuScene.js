import { Scene, Input } from 'phaser'
import { THEME } from '../main'
import { Storage } from '../utils/storage'

export class MenuScene extends Scene {
  constructor() {
    super('menuScene')
  }

  create() {
    console.log('menuScene')
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
    const STYLE_ITEM = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.small,
      backgroundColor: THEME.dark,
      color: THEME.onDark,
      align: 'center',
      padding: THEME.textPaddingSmall,
      fixedWidth: 0,
    }
    this.background = this.add.tileSprite(0, 0, THEME.width, THEME.height, 'background').setOrigin(0, 0)

    this.add.text(THEME.width / 2, 100, 'Beer Patrol', STYLE_TITLE).setOrigin(0.5)
    this.add.text(THEME.width / 2, 200, 'Use ←→ arrows to move & (F) to fill the glasses', STYLE_BODY).setOrigin(0.5)
    this.add.text(THEME.width / 2, 250, 'Press ← for Novice or → for German', STYLE_BODY).setOrigin(0.5)
    this.add.text(THEME.width / 2, THEME.height - 50, 'Press (H) for the local highscore', STYLE_BODY).setOrigin(0.5)

    const lastScore = Storage.currentScore
    if (lastScore > 0) {
      this.add.text(THEME.width / 2, 350, `Last score: ${lastScore}`, STYLE_ITEM).setOrigin(0.5)
    }

    this.keyLeft = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT)
    this.keyRight = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT)
    this.keyH = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.H)
    // pssssssssst just for testing purposes
    this.keyUp = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.UP)
  }

  update() {
    if (Input.Keyboard.JustDown(this.keyLeft)) {
      this._startGame(3, 4, 60, 2)
    }
    if (Input.Keyboard.JustDown(this.keyRight)) {
      this._startGame(4, 2, 45, 0.5)
    }
    if (Input.Keyboard.JustDown(this.keyH)) {
      this.scene.start('highscoreScene')
    }
    if (Input.Keyboard.JustDown(this.keyUp)) {
      this._startGame(4, 50, 5, 1)
    }
  }

  _startGame(enemySpeed, tapSpeed, initialCountdown, countdownBonus) {
    console.log('startGame')
    Storage.enemySpeed = enemySpeed
    Storage.tapSpeed = tapSpeed
    Storage.initialCountdown = initialCountdown
    Storage.countdownBonus = countdownBonus
    this.sound.play('sfx_select')
    this.scene.start('gameScene')
  }
}
