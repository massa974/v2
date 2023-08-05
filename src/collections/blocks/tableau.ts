import type { Block } from 'payload/types';

const tableau: Block = {
  slug: 'tableau',
  labels: {
    singular: 'Tableau',
    plural: 'Tableaux',
  },
  fields: [
    {
      name: 'rows',
      type: 'array',
      fields: [
        {
          name: 'columns',
          type: 'array',
          fields: [
            {
              name: 'cell',
              type: 'text',
              label: 'Cell',
            },
          ],
          label: 'Columns',
        },
      ],
      label: 'Rows',
    },
  ],
};

export default tableau;
