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
  splitLineArr.map((char, index) => {
    if (char === '[' || char === ']') {
      chordOnly = !chordOnly;
      return null;
    }
    if (chordOnly) {
      chordLine = `${chordLine}${char}`;
      return null;
    }
    if (splitLineArr[index + 1] === '[') {
      lyricLine = `${lyricLine}${char}`;
      return null;
    }
    chordLine = `${chordLine} `;
    lyricLine = `${lyricLine}${char}`;
    return null;
  });
  return `${chordLine.trimRight()}\n${lyricLine}`;
};

module.exports = chordPro => {
  let parsed = '';
  const blockArr = chordPro.split('\n\n');
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
  console.log(parsed.split('')[0].charCodeAt(1));
  // Need to figure out logic that will trim or trimRight depending on if first line is chords or not
  if (parsed.split('')[0] === '\n') return parsed.trim();
  return parsed.trimRight();
};
