import type { Block } from 'payload/types';

const textHighlightACC: Block = {
  slug: 'textHighlightACC',
  labels: {
    singular: 'Text HighlightACC',
    plural: 'Text HighlightACC',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
    },
  ],
};

export default textHighlightACC;