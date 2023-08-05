import type { Block } from 'payload/types';

const audioPlayer: Block = {
  slug: 'audioPlayer',
  labels: {
    singular: 'Audio Player',
    plural: 'Audio Players',
  },
  fields: [
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      label: 'Audio File',
    },
  ],
};

export default audioPlayer;