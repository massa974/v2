import type { Block } from 'payload/types';

const exempleBasic: Block = {
  slug: 'exempleBasic',
  labels: {
    singular: 'Exemple Basic',
    plural: 'Exemple Basics',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
      defaultValue: 'exemple',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
};

export default exempleBasic;
