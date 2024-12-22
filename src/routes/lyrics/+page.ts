import {
  bingBang,
  colindita,
  domnulet,
  domnulIisusHristos,
  gazdeMari,
  iataVinColindatori,
  iosif,
  laNunta,
  laVitleem,
  mareMinune,
  oCeVeste,
  oMinune,
  praznic,
  slobozaNe,
  treiCrai,
  noiInSeara,
  laPoarta,
  noiUmblam,
  laMosAjun,
  type Song,
} from '$lib/songs';
import { convertRomanianSymbols, removePunctuation } from '$lib/util';
import type { PageLoad } from './$types';

export const load = (() => {
  const songs: Song[] = [
    oCeVeste,
    laVitleem,
    oMinune,
    mareMinune,
    iosif,
    slobozaNe,
    laNunta,
    domnulet,
    praznic,
    bingBang,
    iataVinColindatori,
    colindita,
    gazdeMari,
    domnulIisusHristos,
    treiCrai,
    noiInSeara,
    laPoarta,
    noiUmblam,
    laMosAjun,
  ];

  // Get completed songs only
  const completedSongs: Song[] = songs.filter(
    (song) => toSingleString(song.displayLyrics).indexOf('in progress') === -1
  );

  // Set search indexable lyrics
  completedSongs.forEach((song) => setSearchLyrics(song));

  return {
    songs: completedSongs,
  };
}) satisfies PageLoad;

function setSearchLyrics(song: Song) {
  song.searchLyrics = convertRomanianSymbols(removePunctuation(toSingleString(song.displayLyrics)));
  console.log(song.searchLyrics);
}

function toSingleString(lyrics: string[][]) {
  return lyrics.reduce((songStr, verse) => `${songStr}${verseReduce(verse)}`, '');
}

function verseReduce(verse: string[]) {
  return verse.reduce((result, line) => `${result}${line} `, '');
}
