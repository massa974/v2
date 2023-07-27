import type { Block } from 'payload/types'
import basicText from './basicText'
import singleImage from './singleImage'

const accordion: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion',
    plural: 'Accordions',
  },
  fields: [
    {
      name: 'panels',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [basicText, singleImage],
          label: 'Content',
        },
      ],
    },
  ],
}

export default accordion
