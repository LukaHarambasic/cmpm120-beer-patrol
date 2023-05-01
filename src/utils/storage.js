export class Storage {
  static set enemySpeed(value) {
    localStorage.setItem('enemySpeed', value)
  }

  static get enemySpeed() {
    return localStorage.getItem('enemySpeed') || 3 // easy mode
  }

  static set tapSpeed(value) {
    localStorage.setItem('tapSpeed', value)
  }

  static get tapSpeed() {
    return localStorage.getItem('tapSpeed') || 4 // easy mode
  }

  static set timer(value) {
    localStorage.setItem('timer', value)
  }

  static get timer() {
    return localStorage.getItem('timer') || 5 * 1000 // 60 * 1000 // easy mode
  }

  static set timerBonus(value) {
    localStorage.setItem('timerBonus', value)
  }

  static get timerBonus() {
    return localStorage.getItem('timerBonus') || 2 * 1000 // easy mode
  }

  static set currentScore(value) {
    localStorage.setItem('currentScore', value)
  }

  static get currentScore() {
    return Number(localStorage.getItem('currentScore')) || 0
  }

  static tryHighscore(value) {
    const highscore = JSON.parse(JSON.stringify(this.highscore))
    highscore.push(value)
    highscore.sort((a, b) => b - a)
    highscore.pop()
    this.highscore = highscore
    return highscore.indexOf(value)
  }

  static set highscore(value) {
    localStorage.setItem('highscore', JSON.stringify(value))
  }

  static get highscore() {
    return JSON.parse(localStorage.getItem('highscore')) || [0, 0, 0, 0, 0]
  }
}
