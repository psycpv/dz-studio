import {ComposeIcon, MasterDetailIcon, SearchIcon} from '@sanity/icons'
import {StringRule, defineArrayMember, defineField, defineType} from 'sanity'
import artwork from '../documents/artwork'

export default defineType({
  name: 'consignments',
  title: 'Home',
  type: 'document',
  icon: MasterDetailIcon,
  groups: [
    {name: 'content', title: 'Content', icon: ComposeIcon, default: true},
    {name: 'seo', title: 'SEO', icon: SearchIcon},
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'editorial',
      title: 'Editorial',
      type: 'dzEditorial',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consignment',
      title: 'Consignments',
      type: 'dzConsignment',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondHero',
      title: 'Hero',
      type: 'dzHero',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'interstitial',
      title: 'Interstitial',
      type: 'dzInterstitial',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'middleHeros',
      title: 'Middle Heros',
      type: 'array',
      group: 'content',
      validation: (rule) => rule.required().length(5),
      of: [defineArrayMember({type: 'dzEditorial', title: 'Editorial'})],
    }),
    defineField({
      name: 'works',
      title: 'Exceptional works',
      type: 'array',
      group: 'content',
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: artwork.name}],
          title: 'Artworks',
        }),
      ],
    }),
    defineField({
      name: 'footerInterstitial',
      title: 'Interstitial',
      type: 'dzInterstitial',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
  ],
})
