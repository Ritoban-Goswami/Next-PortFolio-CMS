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
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
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
  ],
})
