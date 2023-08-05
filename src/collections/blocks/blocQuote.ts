import type { Block } from 'payload/types';

const blocQuote: Block = {
  slug: 'blocQuote',
  labels: {
    singular: 'Bloc Quote',
    plural: 'Bloc Quotes',
  },
  fields: [
    {
      name: 'content',
      type: 'text',
      label: 'Content',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
    {
      name: 'source',
      type: 'text',
      label: 'Source',
    },
  ],
};

export default blocQuote;
