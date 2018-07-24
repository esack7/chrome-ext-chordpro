const { Chords, Numbers } = require('./chords');

module.exports = songline => {
  const songlineArray = songline.split(' ').filter(single => single !== '');
  const songlineArrayFirst = songlineArray.map(ele => ele.split('')[0]);

  if (
    songlineArrayFirst.every(ele => Chords.includes(ele)) ||
    songlineArrayFirst.every(ele => Numbers.includes(ele) || ele === '♭')
  )
    return true;
  return false;
};
