import {ComposeIcon, EditIcon, MasterDetailIcon} from '@sanity/icons'
// Todo: import from the design system import {EditorialType} from '@zwirner/design-system'
import {defineField, defineType} from 'sanity'
export const EDITORIAL_TYPES = {
  SIMPLE: 'simple',
  COMPLEX: 'complex',
  QUOTE: 'quote',
};

export const EDITORIAL_TYPES_NAMES = [
  EDITORIAL_TYPES.SIMPLE,
  EDITORIAL_TYPES.COMPLEX,
  EDITORIAL_TYPES.QUOTE,
] as const;

export type EditorialType = typeof EDITORIAL_TYPES_NAMES[number];

import {TextComplexSchemaType} from '../../../../../schemas/objects/utils/textComplex'

export interface DzEditorialSchemaProps {
  title: string
  editorialType: EditorialType
  editorialTextOverrides?: TextComplexSchemaType[]
  imageOverride?: any
  enableOverrides: boolean
}

export default defineType({
  name: 'dzEditorial',
  title: 'Editorial',
  type: 'object',
  icon: MasterDetailIcon,
  groups: [
    {name: 'content', title: 'Content', icon: ComposeIcon, default: true},
    {name: 'overrides', title: 'Overrides', icon: EditIcon},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Component title',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Type',
      name: 'editorialType',
      type: 'string',
      group: 'content',
      options: {
        list: [
          {title: 'Simple', value: 'simple'},
          {title: 'Complex', value: 'complex'},
          {title: 'Quote', value: 'quote'},
        ],
      },
      initialValue: 'simple',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Editorial Content',
      type: 'editorialContent',
      group: 'content',
    }),
    defineField({
      name: 'enableOverrides',
      type: 'boolean',
      title: 'Enable Overrides',
      group: 'overrides',
      initialValue: false
    }),
    defineField({
      name: 'editorialTextOverrides',
      title: 'Text Content',
      type: 'array',
      group: 'overrides',
      of: [{type: 'textComplex'}],
    }),
    defineField({
      name: 'imageOverride',
      type: 'image',
      title: 'Image',
      group: 'overrides',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
        {
          name: 'url',
          type: 'string',
          title: 'Url redirect',
        },
      ],
    }),
  ],
})
