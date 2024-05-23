import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'blockContent',
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [{type: 'reference', to: {type: 'experiences'}}],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projects'}}],
    }),
  ],
})
