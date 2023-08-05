import type { Block } from 'payload/types';

const H6Title: Block = {
  slug: 'H6Title',
  labels: {
    singular: 'H6 Title',
    plural: 'H6 Titles',
  },
  fields: [
    {
      name: 'Titre',
      type: 'text',
      label: 'Text',
    },
  ],
};

export default H6Title;
