import imaginedpasts from '$lib/media/imaginedpasts.webp';
import kitchenstudio from '$lib/media/kitchenstudio.webp';
import material from '$lib/media/material.webp';
import kciv from '$lib/media/kciv.webp';
import stem from '$lib/media/stem.png';

export type Image = {
  image: string,
  backgroundColor: string,
  overlayColor: string,
  title: string,
  subtitle: string,
  type: string,
  url?: string,
};

export const images: Array<Image> = [
  {
    image: kitchenstudio,
    backgroundColor: '#e2cbb5',
    overlayColor: '#778379',
    title: 'Kitchen Studio Factory',
    subtitle: 'Cultures of Making in East Asia',
    type: 'Undergraduate Seminar',
    url: 'https://www.kitchenstudiofactory.com/',
  },
  {
    image: imaginedpasts,
    backgroundColor: '#24140F',
    overlayColor: '#adadab',
    title: 'Imagined Pasts',
    subtitle: 'Traditional Korean Culture Through Film',
    type: 'Undergraduate Seminar',
  },
  {
    image: material,
    backgroundColor: '#121212',
    overlayColor: '#D72638',
    title: 'Korean Civilization',
    subtitle: '',
    type: 'Undergraduate Lecture',
  },
  {
    image: kciv,
    backgroundColor: '#223061',
    overlayColor: '#D06A66',
    title: 'Guns Tobacco & Sweet Potato',
    subtitle: 'A History of Material Culture',
    type: 'Undergraduate Seminar',
  },
  {
    image: stem,
    backgroundColor: '#121212',
    overlayColor: '#aeb4ae',
    title: 'Nature Technology Medicine',
    subtitle: 'In Korea',
    type: 'Undergraduate / Graduate Seminar',
  },
];
