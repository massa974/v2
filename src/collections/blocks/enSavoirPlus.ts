import type { Block } from 'payload/types';

const enSavoirPlus: Block = {
  slug: 'enSavoirPlus',
  labels: {
    singular: 'En Savoir Plus',
    plural: 'En Savoir Plus',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
    {
      name: 'anchor',
      type: 'text',
      label: 'Anchor',
    },
  ],
};

export default enSavoirPlus;
