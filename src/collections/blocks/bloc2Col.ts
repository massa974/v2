import type { Block } from 'payload/types';

const bloc2Col: Block = {
  slug: 'bloc2Col',
  labels: {
    singular: 'Bloc 2 Col',
    plural: 'Bloc 2 Cols',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'column',
          type: 'text',
          label: 'Column',
        },
      ],
    },
  ],
};

export default bloc2Col;