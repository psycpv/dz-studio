import {BlockElementIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stories',
  title: 'Stories',
  type: 'document',
  icon: BlockElementIcon,
  preview: {select: {title: 'title'}},
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
