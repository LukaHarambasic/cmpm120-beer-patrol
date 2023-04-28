import { TitleScene } from './scenes/TitleScene'
import { MenuScene } from './scenes/MenuScene'
import { GameScene } from './scenes/GameScene'
import { HighscoreScene } from './scenes/HighscoreScene'
import './style.css'
import { Game, CANVAS } from 'phaser'

const canvasElement = document.getElementById('game')

export const THEME = {
  width: 640,
  height: 480,
  primary: '#FAE44C',
  onPrimary: '#000000',
  fontFamily: 'Arial',
  fontSizes: {
    title: '28px',
    body: '16px',
  },
  textPadding: 8,
}

const config = {
  type: CANVAS,
  width: THEME.width,
  height: THEME.height,
  canvas: canvasElement,
  scene: [TitleScene, MenuScene, GameScene, HighscoreScene],
}

new Game(config)
