const chordCheck = require('./detectChords');

module.exports = song => {
  let songString = ''; // sets var to build new string
  const arrBlock = song.split('\n\n'); // breaks into blocks separated by a line.
  arrBlock.map(block => {
    const blockLines = block.split('\n');
    let previousChords = [];
    blockLines.map((line, index) => {
      if (!chordCheck(line)) {
        if (previousChords.length) {
          let longer;
          const lyrics = line.split('');
          if (previousChords.length >= lyrics.length)
            longer = previousChords.length;
          longer = lyrics.length;
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
          return songString;
        }
        songString = `${songString}${line}\n`;
        return songString;
      }
      const chords = [];
      const chordSplit = line.split(' ');
      chordSplit.map(idx => {
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
      previousChords = chords;
      return null;
    });
    songString = `${songString}\n`; // adds block to the songString
    return songString;
  });
  return songString.trim();
};
