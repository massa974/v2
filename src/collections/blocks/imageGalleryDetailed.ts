import type { Block } from 'payload/types';

const imageGalleryDetailed: Block = {
  slug: 'imageGalleryDetailed',
  labels: {
   
singular: 'Image Gallery Detailed',
plural: 'Image Gallery Detailed',
},
fields: [
{
  name: 'images',
  type: 'array',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
    {
      name: 'anchorText',
      type: 'text',
      label: 'Anchor Text',
    },
  ],
  label: 'Images',
},
],
};

export default imageGalleryDetailed;