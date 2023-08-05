import type { CollectionConfig } from 'payload/types';

const Skill: CollectionConfig = {
  slug: 'skill',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Skill Name',
      required: true,
    },
    {
      name: 'lessons',
      type: 'relationship',
      relationTo: 'lesson',
      label: 'Lessons',
      hasMany: true,
    },
  ],
  admin: {
    useAsTitle: 'title', // Utilisez le champ 'title' comme titre dans l'interface d'administration
  },
};

export default Skill;
