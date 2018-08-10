const { keyChords } = require('./chords');
const extract = require('./chordExtract');

module.exports = (song, currentKey, transposeKey) => {
  const logic = song
    .split('\n')
    .map(line => {
      if (line.includes('[')) {
        return line
          .split('[')
          .map(section => {
            if (section.includes(']')) {
              const x = section.split(']');
              let wholeChord = x[0];
              // implement extractChord(chord)
              const { chord, postfix } = extract(wholeChord, currentKey);
              const index = keyChords[currentKey].indexOf(chord);
              wholeChord = keyChords[transposeKey][index] + postfix;
              x[0] = wholeChord;
              return x.join(']');
            }
            return section;
          })
          .join('[');
      }
      return line;
    })
    .join('\n');

  return logic;
};
