const lineTrim = require('./lineTrim');

const detectChordpro = line => {
  if (line.split('').includes('[')) return true;
  return false;
};

const detectLyrics = line => {
  if (
    line
      .split(' ')
      .filter(ele => ele !== '')
      .map(word => word.includes('['))
      .includes(false)
  )
    return true;
  return false;
};

const removeBrackets = line =>
  line
    .split('')
    .filter(char => {
      if (char === '[') return false;
      if (char === ']') return false;
      return true;
    })
    .join('');

const splitLine = line => {
  let chordLine = '';
  let lyricLine = '';
  let chordOnly = false;
  const splitLineArr = line.split('');
  let chordHold = 0;
  splitLineArr.map((char, index) => {
    if (char === '[' || char === ']') {
      chordOnly = !chordOnly;
      return null;
    }
    if (chordOnly) {
      chordLine = `${chordLine}${char}`;
      chordHold += 1;
      return null;
    }
    if (splitLineArr[index + 1] === '[') {
      chordLine = `${chordLine} `;
      lyricLine = `${lyricLine}${char}`;
      return null;
    }
    if (chordHold === 0) {
      chordLine = `${chordLine} `;
    }
    if (chordHold > 0) {
      chordHold -= 1;
    }
    lyricLine = `${lyricLine}${char}`;
    return null;
  });
  return `${chordLine.trimRight()}\n${lyricLine}`;
};

module.exports = chordPro => {
  const linetrim = lineTrim(chordPro);
  let parsed = '';
  const blockArr = linetrim.split('\n\n');
  blockArr.map(block => {
    const lineArr = block.split('\n');
    lineArr.map(line => {
      if (detectChordpro(line)) {
        if (detectLyrics(line)) {
          parsed = `${parsed}\n${splitLine(line)}`;
          return parsed;
        }
        parsed = `${parsed}\n${removeBrackets(line)}`;
        return parsed;
      }
      parsed = `${parsed}\n${line}`;
      return parsed;
    });
    parsed = `${parsed}\n`;
    return parsed;
  });
  if (parsed.charCodeAt(1) === 32) {
    const newParsed = parsed.substring(1);
    return newParsed.trimRight();
  }
  return parsed.trim();
};
