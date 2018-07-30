module.exports = songline => {
  const chordCheck = songline.replace(
    // This regex determines if a there is a chord in a single line and changes the chords to have brackets [chords]
    /(\b([CDEFGAB](?:b|bb)*(?:#|#m|##|m|sus|maj|min|aug)*[\d/]*(?:[CDEFGAB](?:b|bb)*(?:#|##|sus|maj|min|aug)*[\d/]*)*)(?=\s|$)(?! \w))/gm,
    '[$2]'
  );
  if (songline === chordCheck) return false;
  return true;
};
