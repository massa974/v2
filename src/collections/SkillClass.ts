import type { CollectionConfig } from 'payload/types';

const SkillClass: CollectionConfig = {
  slug: 'skillClass',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Skill Class Name',
      required: true,
    },
    {
      name: 'courses',
      type: 'relationship',
      relationTo: 'course',
      label: 'Courses',
      hasMany: true,
    },
    {
      name: 'module',
      type: 'relationship',
      relationTo: 'module',
      label: 'Module',
      hasMany: false,
    },
  ],
};

export default SkillClass;
