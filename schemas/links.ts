import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link Url',
      type: 'url',
    }),
  ],
})
