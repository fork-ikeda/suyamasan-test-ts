import Fortune from '../src/Fortune'

describe('Class Fortune("ikeda", 19980518, false)', () => {
  let fortune: Fortune
  beforeEach(() => {
    fortune = new Fortune("ikeda", 19980518, false)
  })
  describe("getPlayerName()", () => {
    it('returns string that is player name', () => {
      expect(fortune.getPlayerName()).toBe('ikeda')
    })
  })
  describe("getPlayerBirthday()", () => {
    it("returns string that is player birthday", () => {
      expect(fortune.getPlayerBirthday()).toBe('1998年05月18日')
    })
  })
  describe("isLuckyMode()", () => {
    it('returns a boolean to determine the lucky mode', () => {
      expect(fortune.isLuckyMode()).toBe(false)
    })
  })
  describe('tellFortunes()', () => {
    it("get the player's fortune results, which depending on the lucky mode", () => {
      expect(fortune.tellFortunes()).toBe('悪い')
    })
  })
})

describe('Class Fortune("Schwarzenegger", 19470730, true)', () => {
  let fortune: Fortune
  beforeEach(() => {
    fortune = new Fortune("Schwarzenegger", 19470730, true)
  })
  describe("getPlayerName()", () => {
    it('returns string that is player name', () => {
      expect(fortune.getPlayerName()).toBe('Schwarzenegger')
    })
  })
  describe("getPlayerBirthday()", () => {
    it("returns string that is player birthday", () => {
      expect(fortune.getPlayerBirthday()).toBe('1947年07月30日')
    })
  })
  describe("isLuckyMode()", () => {
    it('returns a boolean to determine the lucky mode', () => {
      expect(fortune.isLuckyMode()).toBe(true)
    })
  })
  describe('tellFortunes()', () => {
    it("get the player's fortune results, which depending on the lucky mode", () => {
      expect(fortune.tellFortunes()).toBe('普通')
    })
  })
})

describe('Class Fortune("SnoopDogg", 19711020, false)', () => {
  let fortune: Fortune
  beforeEach(() => {
    fortune = new Fortune("SnoopDogg", 19711020, false)
  })
  describe("getPlayerName()", () => {
    it('returns string that is player name', () => {
      expect(fortune.getPlayerName()).toBe('SnoopDogg')
    })
  })
  describe("getPlayerBirthday()", () => {
    it("returns string that is player birthday", () => {
      expect(fortune.getPlayerBirthday()).toBe('1971年10月20日')
    })
  })
  describe("isLuckyMode()", () => {
    it('returns a boolean to determine the lucky mode', () => {
      expect(fortune.isLuckyMode()).toBe(false)
    })
  })
  describe('tellFortunes()', () => {
    it("get the player's fortune results, which depending on the lucky mode", () => {
      expect(fortune.tellFortunes()).toBe('良い')
    })
  })
})