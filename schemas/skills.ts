import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skillName',
      title: 'Skill Name',
      type: 'string',
    }),
  ],
})
