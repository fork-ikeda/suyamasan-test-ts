export default class Fortune {
  private playerName: string

  constructor(name: string) {
    this.playerName = name
  }
  public getPlayerName() {
    return this.playerName
  }
}