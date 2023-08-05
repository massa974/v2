import type { Block } from 'payload/types';

const textButton: Block = {
  slug: 'textButton',
  labels: {
    singular: 'Text Button',
    plural: 'Text Buttons',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
  ],
};

export default textButton;