export class CounterService {
  activeCount = 0
  inactiveCount = 0

  logActiveCount() {
    this.activeCount++
    console.log("active :" + this.activeCount)
  }

  logInactiveCount() {
    this.inactiveCount++
    console.log("inactive count :" + this.inactiveCount)
  }
}