import type { Block } from 'payload/types';
import basicText from './basicText';
import singleImage from './singleImage';
import audioPlayer from './audioPlayer';
import bloc2Col from './bloc2Col';
import bloc3Col from './bloc3Col';
import blocQuote from './blocQuote';
import blogHighlight from './blogHighlight';
import enSavoirPlus from './enSavoirPlus';
import exempleBasic from './exempleBasic';
import exempleTitre from './exempleTitre';
import h2Title from './h2Title';
import h3Title from './H3Title';
import h4Title from './h4Title';
import h5Title from './h5Title';
import h6Title from './h6Title';
import imageGalleryDetailed from './imageGalleryDetailed';
import imageGallerySimple from './imageGallerySimple';
import imageMobile from './imageMobile';
import imageMobileGalleryDetailed from './imageMobileGalleryDetailed';
import imageMobileGallerySimple from './imageMobileGallerySimple';
import imageSource from './imageSource';
import tableau from './tableau';
import textButton from './textButton';
import textHighlight from './textHighlight';
import textHighlightAcc from './textHighlightAcc';
import textHighlightBig from './textHighlightBig';
import textSource from './textSource';
import ytVideo from './ytVideo';

const accordion: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      name: 'panels',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [
            basicText,
            singleImage,
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
            ytVideo
          ],
          label: 'Content',
        },
      ],
    },
  ],
}

export default accordion;
