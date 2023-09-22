import type { CollectionConfig } from 'payload/types';
import accordion from './blocks/accordion';
import basicText from './blocks/basicText';
import singleImage from './blocks/singleImage';
import audioPlayer from './blocks/audioPlayer';
import bloc2Col from './blocks/bloc2Col';
import bloc3Col from './blocks/bloc3Col';
import blocQuote from './blocks/blocQuote';
import blogHighlight from './blocks/blogHighlight';
import enSavoirPlus from './blocks/enSavoirPlus';
import exempleBasic from './blocks/exempleBasic';
import exempleTitre from './blocks/exempleTitre';
import h2Title from './blocks/h2Title';
import h3Title from './blocks/H3Title';
import h4Title from './blocks/h4Title';
import h5Title from './blocks/h5Title';
import h6Title from './blocks/h6Title';
import imageGalleryDetailed from './blocks/imageGalleryDetailed';
import imageGallerySimple from './blocks/imageGallerySimple';
import imageMobile from './blocks/imageMobile';
import imageMobileGalleryDetailed from './blocks/imageMobileGalleryDetailed';
import imageMobileGallerySimple from './blocks/imageMobileGallerySimple';
import imageSource from './blocks/imageSource';
import tableau from './blocks/tableau';
import textButton from './blocks/textButton';
import textHighlight from './blocks/textHighlight';
import textHighlightAcc from './blocks/textHighlightAcc';
import textHighlightBig from './blocks/textHighlightBig';
import textSource from './blocks/textSource';
import ytVideo from './blocks/ytVideo';

const Lesson: CollectionConfig = {
  slug: 'lesson',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      type: 'row', // Utilisez le type 'row' pour créer une ligne
      fields: [
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          label: 'Categories',
          hasMany: true,
          admin: {
            width: '50%', // Définissez la largeur à 50%
          },
        },
        {
          name: 'skills',
          type: 'relationship',
          relationTo: 'skill',
          label: 'Skills',
          hasMany: true,
          admin: {
            width: '50%', // Définissez la largeur à 50%
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        basicText,
        singleImage,
        accordion,
        audioPlayer,
        bloc2Col,
        bloc3Col,
        blocQuote,
        blogHighlight,
        enSavoirPlus,
        exempleBasic,
        exempleTitre,
        h2Title,
        h3Title,
        h4Title,
        h5Title,
        h6Title,
        imageGalleryDetailed,
        imageGallerySimple,
        imageMobile,
        imageMobileGalleryDetailed,
        imageMobileGallerySimple,
        imageSource,
        tableau,
        textButton,
        textHighlight,
        textHighlightAcc,
        textHighlightBig,
        textSource,
        ytVideo,
      ],
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
};

export default Lesson;