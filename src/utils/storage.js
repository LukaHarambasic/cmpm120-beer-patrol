export class Storage {
  static set speed(value) {
    localStorage.setItem('speed', value)
  }

  static get speed() {
    return localStorage.getItem('speed') || 3 // easy mode
  }

  static set timer(value) {
    localStorage.setItem('timer', value)
  }

  static get timer() {
    return localStorage.getItem('timer') || 5 * 1000 // 60 * 1000 // easy mode
  }

  static set currentScore(value) {
    console.log('set currentScore', value)
    localStorage.setItem('currentScore', value)
  }

  static get currentScore() {
    return Number(localStorage.getItem('currentScore')) || 1802 // 0
  }

  static tryHighscore(value) {
    console.log('tryHighscore', value)
    const highscore = JSON.parse(JSON.stringify(this.highscore))
    highscore.push(value)
    highscore.sort((a, b) => b - a)
    highscore.pop()
    this.highscore = highscore
    return highscore.indexOf(value)
  }

  static set highscore(value) {
    console.log('set highscore', value)
    localStorage.setItem('highscore', JSON.stringify(value))
  }

  static get highscore() {
    console.log('get highscore')
    return JSON.parse(localStorage.getItem('highscore')) || [0, 0, 0, 0, 0]
  }
}
