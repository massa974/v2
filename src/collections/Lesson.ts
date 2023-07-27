import type { CollectionConfig } from 'payload/types'
import accordion from './blocks/accordion'
import basicText from './blocks/basicText'
import singleImage from './blocks/singleImage'

const Lesson: CollectionConfig = {
  slug: 'lesson',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [basicText, singleImage, accordion],
    },
  ],
}

export default Lesson
