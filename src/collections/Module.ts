import type { CollectionConfig } from 'payload/types';

const Module: CollectionConfig = {
  slug: 'module',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Module Name',
      required: true,
    },
    {
      name: 'skillClasses',
      type: 'relationship',
      relationTo: 'skillClass',
      label: 'Skill Classes',
      hasMany: true,
    },
  ],
};

export default Module;