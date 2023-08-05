import type { Block } from 'payload/types';

const H4Title: Block = {
  slug: 'H4Title',
  labels: {
    singular: 'H4 Title',
    plural: 'H4 Titles',
  },
  fields: [
    {
      name: 'Titre',
      type: 'text',
      label: 'Text',
    },
  ],
};

export default H4Title;
