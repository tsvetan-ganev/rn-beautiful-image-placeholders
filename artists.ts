export interface MusicAlbum {
  name: string;
  year: number;
  artwork: {
    url: string;
    dominantColors: [string, string];
    blurhash?: string;
  };
}

export interface MusicArtist {
  name: string;
  albums: MusicAlbum[];
}

// adds a fake query parameter to the image URL
// so that it is always fetched form network and not from cache
const artUrl = (path: string) =>
  `https://coverartarchive.org/release/${path}.jpg?${new Date()}`;

const artists: MusicArtist[] = [
  {
    name: 'Nine Inch Nails',
    albums: [
      {
        name: 'Pretty Hate Machine',
        year: 1989,
        artwork: {
          url: artUrl('60a04a88-3956-49f5-9d0f-b2603be9f612/8270653258-500'),
          dominantColors: ['#d0498e', '#2d85b0'],
          blurhash: 'UKC6~3T#W9rqK5S#X8ay9rS1r?r?w|#SWASg',
        },
      },
      {
        name: 'The Downward Spiral',
        year: 1994,
        artwork: {
          url: artUrl('dceb6a01-3431-36af-b2e1-6462193bd67c/2196400361-500'),
          dominantColors: ['#dac47f', '#bea06d'],
          blurhash: 'UVOMZftnxvog~o.8o#M}MyxXRQtQD*IUf5t6',
        },
      },
      {
        name: 'The Fragile',
        year: 1999,
        artwork: {
          url: artUrl('ed2fe058-a25c-4bd0-b5ff-9a0f7661ad92/17884561006-500'),
          dominantColors: ['#4d4a55', '#ac2730'],
          blurhash: 'URLBz#02ypR7Q7Vrxbs.cZova1oz%#RQofWB',
        },
      },
      {
        name: 'With Teeth',
        year: 2005,
        artwork: {
          url: artUrl('44cbff72-9db6-4ad0-b4c8-b14986afc93a/10150118074-500'),
          dominantColors: ['#42455d', '#e6ebf0'],
          blurhash: 'U-KUpBt7xuay~qWAt7fRIURjWBfRbcogRjay',
        },
      },
      {
        name: 'Ghosts I-IV',
        year: 2008,
        artwork: {
          url: artUrl('a6db272a-22e6-485d-8d6b-e6d7f469a08c/15668674653-500'),
          dominantColors: ['#20231d', '#87887a'],
          blurhash: 'UADl~2M|00t700t7~pWB~qRjNFof?uxuM{WB',
        },
      },
      {
        name: 'The Slip',
        year: 2008,
        artwork: {
          url: artUrl('e292c47a-49d6-3b11-88f9-9938e77fd15b/4099941150-500'),
          dominantColors: ['#0d0d0d', '#6b2f2f'],
          blurhash: 'UA9%n@of00j[eTIUxu-;00of~qWBx]-;IU00',
        },
      },
    ],
  },
  {
    name: 'Russian Circles',
    albums: [
      {
        name: 'Station',
        year: 2008,
        artwork: {
          url: artUrl('89c525d5-ba1a-448e-ade0-6617ce47eea7/5930134505-500'),
          dominantColors: ['#32302b', '#a7a6a4'],
          blurhash: 'UKCP*Fayxuay~qofofWB-;t7ayWB%MWBWBay',
        },
      },
      {
        name: 'Geneva',
        year: 2009,
        artwork: {
          url: artUrl('acac3cdb-ccd5-3736-87b3-1554de5a83be/3331811954-500'),
          dominantColors: ['#7f756d', '#181511'],
          blurhash: 'UBA^5n%2Rj%L~WNGR*of4:M{t7NGM}of%2WB',
        },
      },
      {
        name: 'Empros',
        year: 2009,
        artwork: {
          url: artUrl('65bc450d-2304-47d9-b114-e84b8bc56811/3331814020-500'),
          dominantColors: ['#dd3446', '#952530'],
          blurhash: 'UjJ~1Y%25QWB}[t7NHoLEzW;xuofVtaytRkC',
        },
      },
      {
        name: 'Memorial',
        year: 2013,
        artwork: {
          url: artUrl('14e2923f-2344-4d4c-9d24-02d18245412d/5929733555-500'),
          dominantColors: ['#1e334b', '#020b21'],
          blurhash: 'U4A1P1ju00xvY8t8?bITD%flI9s:00%g-=bI',
        },
      },
      {
        name: 'Guidance',
        year: 2016,
        artwork: {
          url: artUrl('ae8d42ac-58da-4dc1-974a-0c98c0a8640e/14303151485-500'),
          dominantColors: ['#cbd5d4', '#591d21'],
          blurhash: 'UFH_Y|.8M{x]4TMxbHx]_NWVkCt700ayofRP',
        },
      },
    ],
  },
  {
    name: 'Baroness',
    albums: [
      {
        name: 'The Red Album',
        year: 2007,
        artwork: {
          url: artUrl('d5526d95-9288-4f45-ac86-9ff465792ecb/1369815832-500'),
          dominantColors: ['#e32244', '#dc6eaf'],
          blurhash: 'U9Hm+RyCM{tkLz=zJ7%gQ=?ut7EM.8k?S#rE',
        },
      },
      {
        name: 'Blue Record',
        year: 2009,
        artwork: {
          url: artUrl('c3fcab28-de11-4501-8ef8-131620b62bc7/9561609511-500'),
          dominantColors: ['#73aaad', '#0d66b1'],
          blurhash: 'U7GI$F-g0102D#x|ETEf0O.8$y-O_2NGD+WF',
        },
      },
      {
        name: 'Yellow & Green',
        year: 2012,
        artwork: {
          url: artUrl('2f14078e-cc9a-44c4-ac66-78dc4d182235/25038495680-500'),
          dominantColors: ['#56483b', '#edd445'],
          blurhash: 'UXJ@jwNGWBsk~o-mR,M{?FNGxsRkozoHWCbI',
        },
      },
      {
        name: 'Purple',
        year: 2015,
        artwork: {
          url: artUrl('cca4e60e-66cf-43aa-91be-6e07f980b328/15332374250-500'),
          dominantColors: ['#cb9db8', '#6755b8'],
          blurhash: 'U8H^^~=yEFbx.AEm4]$*tC9ZIc%MELn,RW%2',
        },
      },
      {
        name: 'Gold & Grey',
        year: 2019,
        artwork: {
          url: artUrl('352a670e-d7dc-4d7b-a8b1-2b28def1f63b/23323216427-500'),
          dominantColors: ['#4e524d', '#ea972e'],
          blurhash: 'U9Mhxs}@Djzp1~%K.7VX-nEgIoR%KjRQa1WB',
        },
      },
    ],
  },
];

export default artists;
