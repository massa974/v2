import type { Block } from 'payload/types';

const bloc3Col: Block = {
  slug: 'bloc3Col',
  labels: {
    singular: 'Bloc 3 Col',
    plural: 'Bloc 3 Cols',
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

export default bloc3Col;
