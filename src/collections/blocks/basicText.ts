import type { Block } from 'payload/types'

const basicText: Block = {
  slug: 'basicText',
  labels: {
    singular: 'Basic Text',
    plural: 'Basic Texts',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
    },
  ],
}

export default basicText
