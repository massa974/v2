import type { Block } from 'payload/types';

const h2Title: Block = {
  slug: 'h2Title',
  labels: {
    singular: 'H2 Title',
    plural: 'H2 Titles',
  },
  fields: [
    {
      name: 'Titre',
      type: 'text',
      label: 'Text',
    },
  ],
};

export default h2Title;
