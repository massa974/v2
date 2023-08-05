import type { Block } from 'payload/types';

const textHighlightBig: Block = {
  slug: 'textHighlightBig',
  labels: {
    singular: 'Text Highlight Big',
    plural: 'Text Highlight Big',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
    },
  ],
};

export default textHighlightBig;