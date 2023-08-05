import type { Block } from 'payload/types';

const imageGalleryDetailedPortrait: Block = {
  slug: 'imageGalleryDetailedPortrait',
  labels: {
    singular: 'Image Gallery Detailed Portrait',
    plural: 'Image Gallery Detailed Portraits',
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
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
        {
          name: 'anchorText',
          type: 'text',
          label: 'Anchor Text',
        },
      ],
      label: 'Images',
    },
  ],
};

export default imageGalleryDetailedPortrait;
