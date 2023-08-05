import type { CollectionConfig } from 'payload/types';

const Class: CollectionConfig = {
  slug: 'class',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Class Name',
      required: true,
    },
    {
      name: 'courses',
      type: 'relationship',
      relationTo: 'course',
      label: 'Courses',
      hasMany: true,
    },
  ],
};

export default Class;
