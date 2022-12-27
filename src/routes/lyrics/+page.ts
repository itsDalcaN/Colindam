import {
  bingBang,
  colindita,
  domnulet,
  iataVinColindatori,
  iosif,
  laNunta,
  laVitleem,
  mareMinune,
  oCeVeste,
  oMinune,
  praznic,
  slobozaNe,
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
  ];

  songs.forEach((song) => {
    song.searchLyrics = convertDisplayToSearchLyrics(song.displayLyrics);
    console.log(song.searchLyrics);
  });

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
