const { keyChords } = require('./chords');

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
              let chord = x[0];
              // implement extractChord(chord)
              const index = keyChords[currentKey].indexOf(chord);
              chord = keyChords[transposeKey][index];
              x[0] = chord;
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
