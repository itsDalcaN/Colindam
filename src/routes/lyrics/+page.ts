import type { PageLoad } from './$types';

export const load = (() => {
  const oCeVeste = {
    title: 'O ce veste',
    searchLyrics:
      'O, ce veste minunata In Vitleem ni s-arata Astazi s-a nascut Cel far-de-nceput Cum au spus prorocii Ca la Vitleem Maria Savarsind calatoria Intr-un mic salas Langa-acel oras A nascut pe Mesia Pe Fiul in al Sau nume Tatal L-a trimis in lume Sa se nasca Si sa creasca Sa ne mantuiasca',
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
  };

  const laVitleem = {
    title: 'La Vitleem colo-n jos',
    searchLyrics: 'La Vitleem colo-n jos',
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
  };

  return {
    songs: [oCeVeste, laVitleem],
  };
}) satisfies PageLoad;
