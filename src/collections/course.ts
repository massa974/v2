import type { CollectionConfig } from 'payload/types';

const Course: CollectionConfig = {
  slug: 'course',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'lessons',
      type: 'relationship',
      relationTo: 'lesson',
      label: 'Lessons',
      hasMany: true,
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skill',
      label: 'Skills',
      hasMany: true,
    },
    {
      name: 'skillClass',
      type: 'relationship',
      relationTo: 'skillClass',
      label: 'Skill Class',
      hasMany: false,
    },
  ],
  admin: {
    useAsTitle: 'title', // Utilisez le champ 'title' comme titre dans l'interface d'administration
  },
};

export default Course;