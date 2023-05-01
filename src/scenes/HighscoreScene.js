import { Scene } from 'phaser'
import { THEME } from '../main'
import { Storage } from '../utils/storage'

export class HighscoreScene extends Scene {
  constructor() {
    super('highscoreScene')
  }

  create() {
    console.log('highscoreScene')
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
    const STYLE_ITEM_SELECTED = {
      fontFamily: THEME.fontFamily,
      fontSize: THEME.fontSizes.small,
      backgroundColor: THEME.primary,
      color: THEME.onPrimary,
      align: 'center',
      padding: THEME.textPaddingSmall,
      fixedWidth: 0,
    }

    const gameScene = this.scene.get('gameScene')
    gameScene.scene.stop()
    gameScene.scene.restart()

    this.background = this.add.tileSprite(0, 0, THEME.width, THEME.height, 'background').setOrigin(0, 0)
    this.add.text(THEME.width / 2, 100, 'HIGHSCORE', STYLE_TITLE).setOrigin(0.5)

    const currentScore = Storage.currentScore
    this.add.text(THEME.width / 2, 150, `Score: ${currentScore}`, STYLE_BODY).setOrigin(0.5)

    const highscore = Storage.highscore
    const position = highscore.indexOf(currentScore)
    highscore.forEach((value, i) => {
      const y = 200 + i * 35
      const text = `${i + 1}. ${value}`
      const isNewHighscore = i === position && currentScore > 0
      if (isNewHighscore) {
        this.add.text(THEME.width / 2, y, `>> ${text} <<`, STYLE_ITEM_SELECTED).setOrigin(0.5)
      } else {
        this.add.text(THEME.width / 2, y, text, STYLE_ITEM).setOrigin(0.5)
      }
    })

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
