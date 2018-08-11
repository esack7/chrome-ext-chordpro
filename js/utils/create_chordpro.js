const chordCheck = require('./detectChords');
const makeChordpro = require('./makeChordpro');

module.exports = song => {
  let songString = ''; // sets var to build new string
  const arrBlock = song.split('\n\n'); // breaks into blocks separated by a line.
  arrBlock.map(block => {
    const blockLines = block.split('\n');
    let previousChords = [];
    blockLines.map((line, index) => {
      if (!chordCheck(line) && !!line.trim()) {
        // console.log('Line meets criteria: ', line);

        if (previousChords.length) {
          let longer;
          const lyrics = line.split('');
          if (previousChords.length >= lyrics.length) {
            longer = previousChords.length;
            while (previousChords.length > lyrics.length) {
              lyrics.push(' ');
            }
          } else {
            longer = lyrics.length;
          }
          for (let j = 0; j < longer; j += 1) {
            let a = '';
            if (previousChords[j]) {
              a = `[${previousChords[j]}]`;
            }
            let b = '';
            if (lyrics[j]) {
              b = lyrics[j];
            }
            songString = `${songString}${a}${b}`;
          }
          songString = `${songString}\n`;
          return null;
        }
        songString = `${songString}${line}\n`;
        return null;
      }
      console.log(line);
      const chords = [];
      const chordSplit = line.split(' ');
      chordSplit.map(idx => {
        // console.log(idx);
        if (idx.length) {
          const repeat = idx.length;
          chords.push(idx);
          for (let k = 0; k < repeat; k += 1) {
            chords.push('');
          }
        } else {
          chords.push(idx);
        }
        return null;
      });
      if (index === blockLines.length - 1) {
        songString = `${songString}${makeChordpro(line)}\n`;
        return null;
      }
      console.log('chords: ', chords);
      console.log('previousChords', previousChords);
      previousChords = chords;
      return null;
    });
    songString = `${songString}\n\n`; // adds block to the songString
    return null;
  });
  return songString.trim();
};
