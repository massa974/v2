import type { Block } from 'payload/types';

const imageMobile: Block = {
  slug: 'imageMobile',
  labels: {
    singular: 'Image Mobile',
    plural: 'Image Mobiles',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
};

export default imageMobile;
