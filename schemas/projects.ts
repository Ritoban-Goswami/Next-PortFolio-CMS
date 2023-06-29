import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'projectSlug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: 'projectTitle',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectShortDescription',
      title: 'Project Short Description',
      type: 'text',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'usedTechnologies',
      title: 'Used Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'Link To Build',
      type: 'url',
    }),
    defineField({
      name: 'linkToSource',
      title: 'Link To Source',
      type: 'url',
    }),
    defineField({
      name: 'projectInProgress',
      title: 'Project In Progress?',
      type: 'boolean',
    }),
  ],
})
