import type { Block } from 'payload/types';

const youtubeVideo: Block = {
  slug: 'youtubeVideo',
  labels: {
    singular: 'YouTube Video',
    plural: 'YouTube Videos',
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      label: 'Embed URL',
    },
  ],
};

export default youtubeVideo;