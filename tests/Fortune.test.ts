import Fortune from '../src/Fortune'

describe('Class Fortune', () => {
  let fortune: Fortune
  beforeEach(() => {
    fortune = new Fortune("ikeda")
  })
  describe("getPlayerName()", () => {
    it('returns string that is player name', () => {
      expect(fortune.getPlayerName()).toBe('ikeda')
    })
  })
})