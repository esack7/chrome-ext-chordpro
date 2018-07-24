const create = require('../../js/utils/create_chordpro');

describe('Testing create_chordpro.js file', () => {
  const singleChordLyric = `G              D\nHello there birdie!`;
  const singleChordLyricChordpro = `[G]Hello there bir[D]die!`;
  const singleTitleChordLyric = `Title\nG              D\nHello there birdie!`;
  const singleTitleChordLyricChordpro = `Title\n[G]Hello there bir[D]die!`;
  const singleDescription = `Description`;
  const singleDescriptionChordPro = `${singleDescription}`;
  test('Will return type string', () => {
    expect(typeof create('string')).toBe(typeof 'string');
  });
  test('3 line block of Title/Chords/Lyrics will convert properly to 2 line chordpro', () => {
    expect(create(singleTitleChordLyric)).toBe(singleTitleChordLyricChordpro);
  });
  test('A set of 3 line blocks of Title/Chords/Lyrics will convert properly to 5 lines of chordpro', () => {
    expect(create(`${singleTitleChordLyric}\n\n${singleTitleChordLyric}`)).toBe(
      `${singleTitleChordLyricChordpro}\n\n${singleTitleChordLyricChordpro}`
    );
  });
  test('Single line block of Description will remain unchanged', () => {
    expect(create(singleDescription)).toBe(singleDescriptionChordPro);
  });
  test('2 single line blocks of Description will remain unchanged', () => {
    expect(create(`${singleDescription}\n\n${singleDescription}`)).toBe(
      `${singleDescriptionChordPro}\n\n${singleDescriptionChordPro}`
    );
  });
  test('A single line block of Description and 3 line block of Title/Chords/Lyrics will result in 4 lines of chordpro', () => {
    expect(create(`${singleDescription}\n\n${singleTitleChordLyric}`)).toBe(
      `${singleDescriptionChordPro}\n\n${singleTitleChordLyricChordpro}`
    );
  });
  xtest('2 line block of Chord/Lyrics will convert properly to 1 line chordpro', () => {
    expect(create(singleChordLyric)).toBe(singleChordLyricChordpro);
  });
});
