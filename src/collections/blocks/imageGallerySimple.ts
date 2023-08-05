import type { Block } from 'payload/types';

const imageGallerySimple: Block = {
  slug: 'imageGallerySimple',
  labels: {
    singular: 'Image Gallery Simple',
    plural: 'Image Gallery Simples',
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

export default imageGallerySimple;