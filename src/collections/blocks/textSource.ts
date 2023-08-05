import type { Block } from 'payload/types';

const textSource: Block = {
  slug: 'textSource',
  labels: {
    singular: 'Text Source',
    plural: 'Text Sources',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
    },
  ],
};

export default textSource;
