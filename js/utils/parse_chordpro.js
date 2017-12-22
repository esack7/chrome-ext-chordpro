module.exports = chordPro => {
  let parsed = '';
  const chunkArr = chordPro.split('\n\n');
  chunkArr.map(ele => {
    const chordArr = ele.split('\n');
    chordArr.map(idx => {
      const eachLine = idx.split('');
      let chord = '';
      let text = '';
      let check = true;
      let a;
      let b;
      for (let i = 0; i < eachLine.length; i += 1) {
        if (eachLine[i] === '[' || eachLine[i] === ']') {
          check = !check;
          if (eachLine[i] === '[') {
            b = i;
          }
          if (eachLine[i] === ']') {
            a = i;
            i += a - b - 1;
          }
        } else if (check) {
          chord = `${chord} `;
        } else {
          chord += eachLine[i];
        }
      }
      check = false;
      for (let j = 0; j < eachLine.length; j += 1) {
        if (eachLine[j] === '[' || eachLine[j] === ']') {
          check = !check;
        } else if (!check) {
          text += eachLine[j];
        }
      }
      chord = chord.replace(/\s*$/, '');
      parsed += `${chord}\n${text}\n`;
      return parsed;
    });
    return null;
  });
  return parsed.trim();
};
