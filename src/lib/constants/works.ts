import p1 from '$lib/media/p1.webp';
import p2 from '$lib/media/p2.webp';
import p3 from '$lib/media/p3.webp';

export type Work = {
  citation: string,
  image: string,
  index: number,
};

export type Works = Record<
  'MONOGRAPH' | 'PEER-REVIEWED ARTICLES' | 'BOOK CHAPTERS' | 'REVIEWS' | 'OTHER PUBLICATIONS',
  Array<Work>
>;

const imgs = [p1, p2, p3];
const rand = () => imgs[Math.floor(Math.random() * imgs.length)];

export const works: Works = {
  'MONOGRAPH': [
    {
      citation: '<i>Artisanal Heart: Korea, Confucian Statecraft, and the Sciences of Making</i> (under contract with The University of Chicago Press)',
      image: rand(),
      index: 0,
    },
  ],
  'PEER-REVIEWED ARTICLES': [
    {
      citation: '“Global History and the Measures of Early Modern Technology: Europe, East Asia, and the Case of Smoothbore Ballistics,” <i>Journal of World History</i> 36, no. 2 (2025): 169–204',
      image: rand(),
      index: 1,
    },
    {
      citation: '“Kingpins at Court: Contraband Diplomacy between Korea, Japan, and Tsushima, 1607–1671,” <i>Journal of Asian Studies</i> 83, no. 1 (2024): 116–139',
      image: rand(),
      index: 2,
    },
    {
      citation: '“Reverse Engineering as History and Method: The Portuguese Espingarda in Chosŏn Korea,” <i>History and Technology</i> 38, no. 2-3 (2023): 144–66',
      image: rand(),
      index: 3,
    },
    {
      citation: 'With Michelle Suh, “Korean Chronicles under a Macroscope: Towards a Digital Infrastructure in Premodern Korean Studies,” <i>Korean Studies</i> 47, no. 1 (2023): 8–33',
      image: rand(),
      index: 4,
    },
    {
      citation: '“How Network Analysis Uncovers International Networks of Smuggling History: Criminals in Nagasaki, Japan circa 1667,” <i>Journal of Cultural Analytics</i> 8, no. 1 (February 2023): 1–20',
      image: rand(),
      index: 5,
    },
    {
      citation: '“Cooking Niter, Prototyping Nature: Saltpeter and Artisanal Experiment in Korea, 1592–1635,” <i>Isis: A Journal of the History of Science Society</i> 113, no. 1 (March 2022): 1–21',
      image: rand(),
      index: 6,
    },
    {
      citation: 'With Tonio Andrade and Kirtsen Cooper, “A Korean Military Revolution? Parallel Military Innovations in East Asia and Europe,” <i>Journal of World History</i> 25, no. 1 (March 2014): 51–84',
      image: rand(),
      index: 7,
    },
    {
      citation: '“Big Heads and Buddhist Demons: The Korean Musketry Revolution and the Northern Expeditions of 1654 and 1658,” <i>Journal of Chinese Military History</i> 2, no. 2 (2013): 127–89',
      image: rand(),
      index: 8,
    },
  ],
  'BOOK CHAPTERS': [
    {
      citation: '“Firearms, Fluidity, and the Global Technology Circuit: Conflict, 1450–1650,” for <i>A Cultural History of Technology in the Age of Encounters</i> (1450–1650), ed. Mackenzie Cooley (London: Bloomsbury; forthcoming)',
      image: rand(),
      index: 9,
    },
    {
      citation: '“Difference in an Age of Parity: Technology and Global Military History,” in <i>The Military Revolution and Revolutions in Military Affairs</i>, ed. Mark C. Fissel (Berlin: De Gruyter, 2022), 29–64',
      image: rand(),
      index: 10,
    },
    {
      citation: '“Nature of Narye: Sound, Spectacle, and the Politics of Performance in Fifteenth-Century Korea, 1392–1592,” in <i>Routledge Handbook of Asian Music: Cultural Intersections</i>, ed. Tong Soon Lee (London: Routledge, 2021), 150–73',
      image: rand(),
      index: 11,
    },
  ],
  'REVIEWS': [
    {
      citation: 'Review of Lim Jongtae 임종태, <i>Travel, Reform, and Science and Technology in Eighteenth-Century Korea</i> 여행과 개혁, 그리고 18세기 조선의 과학기술, <i>Journal of the Korean History of Science Society</i> 46, no. 2 (2024): 427–429',
      image: rand(),
      index: 12,
    },
    {
      citation: 'Review of Technical Knowledge in Early Modern Japan, eds. Erich Pauer and Ruselle Meade, <i>Japan Review</i> 37 (2022): 190–2',
      image: rand(),
      index: 13,
    },
    {
      citation: '“In Pursuit of Truth and Justice: Legal History of Chosŏn Korea and the State of the Field,” <i>Seoul Journal of Korean Studies</i> 29, no. 1 (June 2016): 219–27',
      image: rand(),
      index: 14,
    },
  ],
  'OTHER PUBLICATIONS': [
    {
      citation: '“Silloker,” database and search engine for Korean historical chronicles, June 1, 2022–present, https://silloker.com. Co-designed with Michelle Suh',
      image: rand(),
      index: 15,
    },
    {
      citation: '“Climate Change’s Fatal Synergy,” <i>Sense & Sustainability</i>, May 11, 2015',
      image: rand(),
      index: 16,
    },
    {
      citation: '“The Little Ice Age: Heterogeneity of Impact and Japan’s Success Story?”, <i>Sense & Sustainability</i>, December 5, 2014',
      image: rand(),
      index: 17,
    },
    {
      citation: '“The Little Ice Age: History of Climate-Induced Crisis in Europe and East Asia,” <i>Sense & Sustainability</i>, October 15, 2014',
      image: rand(),
      index: 18,
    },
  ],
};

