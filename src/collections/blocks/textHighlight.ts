import type { Block } from 'payload/types';

const textHighlight: Block = {
  slug: 'textHighlight',
  labels: {
    singular: 'Text Highlight',
    plural: 'Text Highlight',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
    },
  ],
};

export default textHighlight;
