import {DashboardIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

import artistType from './artist'
import artworkType from './artwork'
import collectionType from './collection'
import eventType from './event'

export interface Exhibition {}

export default defineType({
  name: 'exhibition',
  title: 'Exhibitions and Fairs ',
  icon: DashboardIcon,
  type: 'document',
  preview: {
    select: {title: 'title', photos: 'photos'},
    prepare: ({title, photos}) => ({title, media: photos?.[0]}),
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule) =>
        Rule.required()
          .min(Rule.valueOfField('startDate'))
          .error('The end date should be greater than the start date'),
    }),
    defineField({
      title: 'Exhibition photos',
      name: 'photos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: eventType.name}],
        }),
      ],
    }),
    defineField({
      name: 'artworks',
      title: 'Artworks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: artworkType.name}],
        }),
      ],
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: collectionType.name}],
        }),
      ],
    }),
    defineField({
      name: 'artists',
      title: 'Artists',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: artistType.name}],
        }),
      ],
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      images: 'photos',
    },
    prepare({title, images}) {
      return {title, media: images?.[0] ?? DashboardIcon}
    },
  },
})
