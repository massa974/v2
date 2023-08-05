import type { Block } from 'payload/types';

const exempleTitre: Block = {
  slug: 'exempleTitre',
  labels: {
    singular: 'Exemple Titre',
    plural: 'Exemple Titres',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
};

export default exempleTitre;