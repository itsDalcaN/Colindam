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
  treiPastori,
  type Song,
  astaSeara,
  deTreiZile,
  ziurelDeZi,
  doamneLerDomnului,
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
    treiPastori,
    astaSeara,
    deTreiZile,
    ziurelDeZi,
    doamneLerDomnului,
  ];

  // Get completed songs only
  const completedSongs: Song[] = songs.filter(
    (song) => toSingleString(song.displayLyrics).indexOf('in progress') === -1
  );

  // Set search indexable lyrics and titles
  completedSongs.forEach((song) => {
    const indexableLyrics = toSearchIndexableString(toSingleString(song.displayLyrics));
    song.searchLyrics = indexableLyrics;

    const indexableTitle = toSearchIndexableString(song.title);
    song.searchTitle = indexableTitle;

    console.log(`Loaded \'${song.title}\'`);
  });

  return {
    songs: completedSongs,
  };
}) satisfies PageLoad;

function toSearchIndexableString(input: string) {
  return convertRomanianSymbols(removePunctuation(input));
}

function toSingleString(lyrics: string[][]) {
  return lyrics.reduce((songStr, verse) => `${songStr}${verseReduce(verse)}`, '');
}

function verseReduce(verse: string[]) {
  return verse.reduce((result, line) => `${result}${line} `, '');
}
