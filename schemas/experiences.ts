import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    }),
  ],
})
