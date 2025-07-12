import imaginedpasts from '$lib/media/imaginedpasts.webp';
import kitchenstudio from '$lib/media/kitchenstudio.webp';
import material from '$lib/media/material.webp';
import kciv from '$lib/media/kciv.webp';
import stem from '$lib/media/stem.png';

export type Image = {
  image: string,
  backgroundColor: string,
  overlayColor: string,
};

export const images: Array<Image> = [
  {
    image: kitchenstudio,
    backgroundColor: '#4B2B1F',
    overlayColor: '#778379',
    // backgroundColor: '#D6BC98',
    // overlayColor: '#748873'
  },
  {
    image: imaginedpasts,
    backgroundColor: '#24140F',
    overlayColor: '#adadab'
  },
  {
    image: material,
    backgroundColor: '#121212',
    overlayColor: '#D72638'
  },
  {
    image: kciv,
    backgroundColor: '#223061',
    overlayColor: '#D06A66'
    // backgroundColor: '#d5d5d5',
    // overlayColor: '#2a2a2a'
  },
  {
    image: stem,
    backgroundColor: '#121212',
    overlayColor: '#FFF2F2'
  },
];
