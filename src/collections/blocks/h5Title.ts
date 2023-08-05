import type { Block } from 'payload/types';

const H5Title: Block = {
  slug: 'H5Title',
  labels: {
    singular: 'H5 Title',
    plural: 'H5 Titles',
  },
  fields: [
    {
      name: 'Titre',
      type: 'text',
      label: 'Text',
    },
  ],
};

export default H5Title;
