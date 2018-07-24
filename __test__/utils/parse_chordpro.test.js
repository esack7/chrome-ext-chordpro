const parse = require('../../js/utils/parse_chordpro');

describe('Testing parse_chordpro.js file', () => {
  const inputChordPro = `[G]Hello there bir[D]die!`;
  const outputChordLyric = `G              D\nHello there birdie!`;
  const inputTitleChordPro = `Title\n${inputChordPro}`;
  const outputTitleChordLyric = `Title\n${outputChordLyric}`;
  const inputTitleMultipleLine = `${inputTitleChordPro}\n${inputChordPro}`;
  const outputTitleMultipleLine = `${outputTitleChordLyric}\n${outputChordLyric}`;
  test('Will return a string', () => {
    expect(typeof parse(inputChordPro)).toBe(typeof 'string');
  });
  test('Will parse one-line chordPro to chord/lyric on separate lines', () => {
    expect(parse(inputChordPro)).toBe(outputChordLyric);
  });
  test('Will parse title and one-line chordPro to title/chord/lyric on separate lines', () => {
    expect(parse(inputTitleChordPro)).toBe(outputTitleChordLyric);
  });
  test('Will parse title and muliple-line chordPro to title/chord/lyric on separate lines', () => {
    expect(parse(inputTitleMultipleLine)).toBe(outputTitleMultipleLine);
  });
});
