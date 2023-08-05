import type { Block } from 'payload/types';
import textHighlightBig from './textHighlightBig';
import basicText from './basicText';
import singleImage from './singleImage';

const blocHighlight: Block = {
  slug: 'blocHighlight',
  labels: {
    singular: 'Bloc Highlight',
    plural: 'Bloc Highlights',
  },
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: [textHighlightBig, basicText, singleImage],
      label: 'Content',
    },
  ],
};

export default blocHighlight;