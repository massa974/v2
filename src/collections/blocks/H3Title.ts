import type { Block } from 'payload/types';

const H3Title: Block = {
  slug: 'H3Title',
  labels: {
    singular: 'H3 Title',
    plural: 'H3 Titles',
  },
  fields: [
    {
      name: 'Titre',
      type: 'text',
      label: 'Text',
    },
  ],
};

export default H3Title;
