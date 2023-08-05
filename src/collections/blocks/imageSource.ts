import type { Block } from 'payload/types';

const imageSource: Block = {
  slug: 'imageSource',
  labels: {
    singular: 'Image Source',
    plural: 'Image Sources',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
  ],
};

export default imageSource;
