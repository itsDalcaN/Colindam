import type { PageLoad } from './$types';

export const load = (() => {
  type Song = {
    title: string;
    searchLyrics: string;
    displayLyrics: string[][];
  };

  const oCeVeste: Song = {
    title: 'O ce veste',
    displayLyrics: [
      [
        'O, ce veste minunată!',
        'În Vitleem ni s-arată',
        'Astăzi s-a născut',
        'Cel făr-de-nceput',
        'Cum au spus prorocii.',
      ],
      [
        'Că la Vitleem Maria',
        'Săvârşind călătoria',
        'Într-un mic sălaş',
        'Lângă-acel oraş',
        'A născut pe Mesia.',
      ],
      [
        'Pe Fiul în al Său nume',
        'Tatăl L-a trimis în lume',
        'Să se nască',
        'Şi să crească',
        'Să ne mântuiască.',
      ],
    ],
    searchLyrics: '',
  };

  const laVitleem: Song = {
    title: 'La Vitleem colo-n jos',
    displayLyrics: [
      ['La Vitleem colo-n jos', 'Cerul arde luminos', 'Preacurata', 'Naște astăzi pe Hristos.'],
      ['Naște-n ieslea boilor', 'Pe-mpăratul tuturor', 'Preacurata', 'Stă și plânge-ncetișor.'],
      [
        'N-are scutec de-nfășat',
        'Nici hăinuțe de-mbrăcat',
        'Preacurata',
        'Pentru pruncul de-mpărat.',
      ],
      [
        'Nu mai plânge, maica mea,',
        'Scutecele noi ți-om da',
        'Preacurată',
        'Pruncul sfânt de-i înfășa.',
      ],
    ],
    searchLyrics: '',
  };

  const songs: Song[] = [laVitleem, oCeVeste];

  songs.forEach((song) => {
    song.searchLyrics = convertDisplayToSearchLyrics(song.displayLyrics);
    console.log(song.searchLyrics);
  });

  laVitleem.displayLyrics[0].reduce((total, current) => `${total} ${current}`, '');

  return {
    songs: songs,
  };
}) satisfies PageLoad;

function convertDisplayToSearchLyrics(displayLyrics: string[][]) {
  return convertRomanianSymbols(removePunctuation(toSingleString(displayLyrics)));
}

function toSingleString(lyrics: string[][]) {
  return lyrics.reduce((songStr, verse) => `${songStr}${verseReduce(verse)}`, '');
}

function verseReduce(verse: string[]) {
  return verse.reduce((result, line) => `${result}${line} `, '');
}

function removePunctuation(s: string) {
  // eslint-disable-next-line no-useless-escape
  return s.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, '').replace(/\s{2,}/g, ' ');
}

function convertRomanianSymbols(s: string) {
  const charTranslatation: { [key: string]: string } = {
    ă: 'a',
    â: 'a',
    î: 'i',
    ș: 's',
    ş: 's',
    ț: 't',
    Ă: 'A',
    Â: 'A',
    Î: 'I',
    Ș: 'S',
    Ş: 'S',
    Ț: 'T',
  };

  let result = s;

  for (const romanianChar in charTranslatation) {
    result = result.replace(new RegExp(`${romanianChar}`, 'g'), charTranslatation[romanianChar]);
  }

  return result;
}
