import { payloadCloud } from '@payloadcms/plugin-cloud';
import FormBuilder from '@payloadcms/plugin-form-builder';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import redirects from '@payloadcms/plugin-redirects';
import seo from '@payloadcms/plugin-seo';
import type { GenerateTitle } from '@payloadcms/plugin-seo/types';
import path from 'path';
import { buildConfig } from 'payload/config';

import Categories from './collections/Categories';
import Lesson from './collections/Lesson';
import Course from './collections/course';
import Class from './collections/class';
import Skill from './collections/skill';
import Module from './collections/Module'; // Nouvelle importation
import SkillClass from './collections/SkillClass'; // Nouvelle importation
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Posts } from './collections/Posts';
import Users from './collections/Users';
import BeforeDashboard from './components/BeforeDashboard';
import { Footer } from './globals/Footer';
import { Header } from './globals/Header';

const generateTitle: GenerateTitle = () => {
  return 'My Website';
};

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js');

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          express: mockModulePath,
        },
      },
    }),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Users, 
    Categories, 
    Pages, 
    Posts, 
    Media, 
    Lesson, 
    Course, 
    Class, 
    Skill, 
    Module, // Nouvelle collection ajoutée
    SkillClass // Nouvelle collection ajoutée
  ],
  globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
      }
    : {}),
  plugins: [
    FormBuilder({
      fields: {
        payment: true,
      },
    }),
    nestedDocs({
      collections: ['pages', 'posts', 'categories', 'module', 'skillClass'],
    }),
    redirects({
      collections: ['pages', 'posts'],
    }),
    seo({
      collections: ['pages', 'posts', 'module', 'skillClass'], // Ajouté 'module' et 'skillClass'
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
});