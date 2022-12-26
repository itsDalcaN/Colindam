import { laVitleem, oCeVeste, oMinune, type Song } from '$lib/songs';
import { convertRomanianSymbols, removePunctuation } from '$lib/util';
import type { PageLoad } from './$types';

export const load = (() => {
  const songs: Song[] = [oCeVeste, laVitleem, oMinune];

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
