import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dateSelectionYear',
  type: 'object',
  title: 'Date Selection',
  description: 'Select a year',
  fields: [
    defineField({
      name: 'year',
      type: 'string',
      title: 'Year',
      description: 'Add a year or year range: YYYY, YYYY–YYYY, c. YYYY, YYYY/YYYY',
      // removed because it's not working properly
      // hidden: ({parent, value}) => {
      //   return !!(!value && (parent?.dateRange?.from || parent?.approximate))
      // },
    }),
  ],
})
