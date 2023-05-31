export default class Fortune {
  private playerName: string
  private playerBirthday: number
  private luckyMode: boolean

  constructor(name: string, birthday: number, mode: boolean) {
    this.playerName = name
    this.playerBirthday = birthday
    this.luckyMode = mode
  }

  public getPlayerName() {
    return this.playerName
  }

  public getPlayerBirthday() {
    const year = this.playerBirthday.toString().substring(0, 4)
    const month = this.playerBirthday.toString().substring(4, 6)
    const date = this.playerBirthday.toString().substring(6)
    return `${year}年${month}月${date}日`
  }

  public isLuckyMode() {
    return this.luckyMode
  }

  public tellFortunes() {
    const year = Number(this.playerBirthday.toString().substring(0, 4))
    const month = Number(this.playerBirthday.toString().substring(4, 6)) - 1
    const date = Number(this.playerBirthday.toString().substring(6))
    const seconds = new Date(year, month, date).getTime() / 1000
    const nameLength = this.playerName.length
    const result = (seconds + nameLength) % 3
    if(this.luckyMode) {
      return result === 0 || result === 1 ? '良い': '普通'
    } else {
      return result === 0 ? '良い': result === 1 ? '普通' : '悪い'
    }
  }
}