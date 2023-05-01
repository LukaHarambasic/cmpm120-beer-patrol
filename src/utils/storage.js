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

  static set initialCountdown(value) {
    localStorage.setItem('initialCountdown', value)
  }

  static get initialCountdown() {
    return localStorage.getItem('initialCountdown') || 5 // 60// easy mode
  }

  static set countdownBonus(value) {
    localStorage.setItem('countdownBonus', value)
  }

  static get countdownBonus() {
    return localStorage.getItem('countdownBonus') || 2 // easy mode
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
