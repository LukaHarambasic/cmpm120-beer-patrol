export class Storage {
  static set speed(speed) {
    localStorage.setItem('speed', speed)
  }

  static get speed() {
    return localStorage.getItem('speed') || 3 // easy mode
  }

  static set timer(timer) {
    localStorage.setItem('timer', timer)
  }

  static get timer() {
    return localStorage.getItem('timer') || 60 * 1000 // easy mode
  }
}
