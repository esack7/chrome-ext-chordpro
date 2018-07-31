const create = require('../../js/utils/create_chordpro');

describe('Testing create_chordpro.js file', () => {
  const singleChordLyric = `G              D\nHello there birdie!`;
  const singleChordLyricChordpro = `[G]Hello there bir[D]die!`;
  const singleLongChordLyric = `G              D        A\nHello there birdie!`;
  const singleLongChordLyricChordpro = `[G]Hello there bir[D]die!     [A]`;
  const singleTitleChordLyric = `Title\nG              D\nHello there birdie!`;
  const singleTitleChordLyricChordpro = `Title\n[G]Hello there bir[D]die!`;
  const singleDescription = `Description`;
  const singleDescriptionChordPro = `${singleDescription}`;
  const singleTitleChord = `Title\nG              D`;
  const singleTitleChordChordpro = `Title\n[G]              [D]`;
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
  test('2 line block of Chord/Lyrics will convert properly to 1 line chordpro', () => {
    expect(create(singleChordLyric)).toBe(singleChordLyricChordpro);
  });
  test('2 line block of Chord/Lyrics where chords extend beyond lyrics will convert properly to 1 line chordpro', () => {
    expect(create(singleLongChordLyric)).toBe(singleLongChordLyricChordpro);
  });
  test('2 line block of Title/Chord will convert properly to 2 line of chordpro', () => {
    expect(create(singleTitleChord)).toBe(singleTitleChordChordpro);
  });
  test('3 line block of Title/Chords/Lyrics plus newline will convert properly to 2 line chordpro', () => {
    expect(create(`${singleTitleChordLyric}\n`)).toBe(
      `${singleTitleChordLyricChordpro}`
    );
  });
});
