const transpose = require('./../../js/utils/transpose');

describe('Testing transpose.js', () => {
  const chordproKeyOfASong =
    'Verse 1\nO[A]ur father who in heaven re[Bm]igns        [F#m]    \n[D]How Great and mighty is your n[F#m]ame              [E]  \n[A]You[Bm]r kingdom co[F#m]me, Your will be done\n[D]Now here on earth as is above [F#m]                 [E]  \n\nVerse 2   \nO give to us our daily bread\nAnd keep our hungry spirits fed\nMay all our satisfaction be\nIn you whose grace has set us free\n\nChorus\nG[A]ive us hope, give us faith, help u[Bm]s trust in your guida[F#m]nce \nFrom t[E]he depths of Your grace, you hav[F#m]e richly provide[D]d \n[A]Thank you, thank you, Fathe[Bm]r you are all we need    [F#m]              [E]  \n[F#m]Father you are all we need  [D]      [A]  \n\nVerse 3\nForgive us all our trespasses\nAs we forgive when sinned against\nThough evil seeks to hide your face\nWe fix our eyes on you by faith\n\nInstrumental\n[A]  [Bm]  [F#m]  [D]  [E]\n\nBridge\nWe lift you hig[A]h above all n[Bm]ames           \n[F#m]Your kingdom will forever rei[D]gn!         [E]  \nTo you th[E]e glory and[A] the power [Bm]   -    f[F#m]orevermore      [D]       [E]';
  const chordproKeyOfGSong =
    'Verse 1\nO[G]ur father who in heaven re[Am]igns        [Em]    \n[C]How Great and mighty is your n[Em]ame              [D]  \n[G]You[Am]r kingdom co[Em]me, Your will be done\n[C]Now here on earth as is above [Em]                 [D]  \n\nVerse 2   \nO give to us our daily bread\nAnd keep our hungry spirits fed\nMay all our satisfaction be\nIn you whose grace has set us free\n\nChorus\nG[G]ive us hope, give us faith, help u[Am]s trust in your guida[Em]nce \nFrom t[D]he depths of Your grace, you hav[Em]e richly provide[C]d \n[G]Thank you, thank you, Fathe[Am]r you are all we need    [Em]              [D]  \n[Em]Father you are all we need  [C]      [G]  \n\nVerse 3\nForgive us all our trespasses\nAs we forgive when sinned against\nThough evil seeks to hide your face\nWe fix our eyes on you by faith\n\nInstrumental\n[G]  [Am]  [Em]  [C]  [D]\n\nBridge\nWe lift you hig[G]h above all n[Am]ames           \n[Em]Your kingdom will forever rei[C]gn!         [D]  \nTo you th[D]e glory and[G] the power [Am]   -    f[Em]orevermore      [C]       [D]';
  const chordproSimpleKeyOfA = 'He[A]llo to the [B]bird from the wor[D]ld';
  const chordproSimpleKeyOfG = 'He[G]llo to the [A]bird from the wor[C]ld';
  test('Simple song line in chordpro format key of A should transpose correctly to same format in key of G', () => {
    expect(transpose(chordproSimpleKeyOfA, 'A', 'G')).toBe(
      chordproSimpleKeyOfG
    );
  });
  test('Song in chordpro format key of A should transpose correctly to same format in key of G', () => {
    expect(transpose(chordproKeyOfASong, 'A', 'G')).toBe(chordproKeyOfGSong);
  });
});
