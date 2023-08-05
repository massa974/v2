import type { Block } from 'payload/types';

const imageMobileGallerySimple: Block = {
  slug: 'imageMobileGallerySimple',
  labels: {
    singular: 'Image Mobile Gallery Simple',
    plural: 'Image Mobile Gallery Simples',
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
      label: 'Images',
    },
  ],
};

export default imageMobileGallerySimple;
