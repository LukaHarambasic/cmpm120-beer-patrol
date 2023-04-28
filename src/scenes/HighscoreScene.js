import { Scene } from 'phaser'

export class HighscoreScene extends Scene {
  constructor() {
    super('highscoreScene')
  }

  create() {
    this.background = this.add.tileSprite(0, 0, THEME.width, THEME.height, 'background').setOrigin(0, 0)
  }
}
