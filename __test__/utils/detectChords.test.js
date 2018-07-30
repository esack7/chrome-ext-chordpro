const detect = require('../../js/utils/detectChords');

describe('Testing dectectChords.js', () => {
  test('Passing in random text will return false', () => {
    expect(detect('random text')).toBe(false);
    expect(detect('Supercalifagilisticexpialidotious')).toBe(false);
  });
  test('Line that contains chords will return true', () => {
    expect(detect('A')).toBe(true);
    expect(detect('Am7 Bsus  D F#m')).toBe(true);
    // expect(detect('3 ♭7m 5# 4')).toBe(false);
    expect(detect('G C Em D')).toBe(true);
  });
  test("Line that doesn't contain chords will return false", () => {
    expect(detect('A Good Boy Behaves Exemplary')).toBe(false);
    expect(detect('H# X   L Msus I')).toBe(false);
  });
});
