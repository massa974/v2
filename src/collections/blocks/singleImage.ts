import type { Block } from 'payload/types'

const singleImage: Block = {
  slug: 'singleImage',
  labels: {
    singular: 'Single Image',
    plural: 'Single Images',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
}

export default singleImage
