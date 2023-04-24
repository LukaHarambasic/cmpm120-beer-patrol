import { MenuScene } from './scenes/MenuScene'
import { GameScene } from './scenes/GameScene'
import './style.css'
import { Game, CANVAS } from 'phaser'

const canvasElement = document.getElementById('game')

// TODO maybe export THEME and CONFIG?
export const WIDTH = 640
export const HEIGHT = 480
export const BORDER_UI_SIZE = HEIGHT / 15
export const BORDER_PADDING = BORDER_UI_SIZE / 3
// TODO don't like this, will be refactored in moded version
// TODO this should be a text builder, defaults, but everything can be overwritten
// TODO should I than still provide defaults? I think so!
// TODO okay, static theme class, with default stylings and style generators <- thats it :D
export const H1 = {
  fontFamily: 'Courier',
  fontSize: '28px',
  backgroundColor: '#F3B141',
  color: '#843605',
  align: 'right',
  padding: {
    top: 5,
    bottom: 5,
  },
  fixedWidth: 0,
}
export const H2 = {
  fontFamily: 'Courier',
  fontSize: '28px',
  backgroundColor: '#00FF00',
  color: '#000000',
  align: 'right',
  padding: {
    top: 5,
    bottom: 5,
  },
  fixedWidth: 0,
}
export const SCORE = {
  fontFamily: 'Courier',
  fontSize: '28px',
  backgroundColor: '#F3B141',
  color: '#843605',
  align: 'right',
  padding: {
    top: 5,
    bottom: 5,
  },
  fixedWidth: 100,
}
export const GAME_OVER = {
  fontFamily: 'Courier',
  fontSize: '20px',
  backgroundColor: '#F3B141',
  color: '#843605',
  align: 'center',
  padding: {
    top: 5,
    bottom: 5,
  },
  fixedWidth: WIDTH - BORDER_UI_SIZE * 2 - BORDER_PADDING * 2,
}

const CONFIG = {
  type: CANVAS,
  width: WIDTH,
  height: HEIGHT,
  canvas: canvasElement,
  scene: [MenuScene, GameScene],
}

new Game(CONFIG)
