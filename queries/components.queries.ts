import groq from 'groq'

import dzCardTypeSchema from '../schemas/objects/page/components/molecules/dzCard'
import dzCarouselTypeSchema from '../schemas/objects/page/components/molecules/dzCarousel'
import dzEditorialTypeSchema from '../schemas/objects/page/components/molecules/dzEditorial'
import dzHeroTypeSchema from '../schemas/objects/page/components/molecules/dzHero'
import dzHeroCarouselTypeSchema from '../schemas/objects/page/components/molecules/DzHeroCarousel'
import dzInterstitialTypeScheme from '../schemas/objects/page/components/molecules/dzInterstitial'
import dzSplitTypeSchema from '../schemas/objects/page/components/molecules/dzSplit'
import dzTitleTypeSchema from '../schemas/objects/page/components/molecules/dzTitle'
import gridTypeSchema from '../schemas/objects/page/grid'

// Must follow GridMoleculeTypeProps
export const gridMoleculeProps = groq`
  _type == '${gridTypeSchema.name}' => {
    'props': {
      title,
      masonryGrid,
      wrap,
      itemsPerRow,
      sortField,
      sortOrder,
      enableOverrides,
    }
  },
`

// Must follow DzCardSchemaProps
export const dzCardProps = groq`
  _type == '${dzCardTypeSchema.name}' => {
    'props': {
      title,
      primaryCTA,
      secondaryCTA,
      imageOverride,
      enableOverrides,
    }
  },
`

// Must follow DzCarouselSchemaProps
export const dzCarouselProps = groq`
  _type == '${dzCarouselTypeSchema.name}' => {
    'props': {
      title,
      enableOverrides,
    }
  },
`

// Must follow DzEditorialSchemaProps
export const dzEditorialProps = groq`
  _type == '${dzEditorialTypeSchema.name}' => {
    'props': {
      title,
      editorialType,
      editorialTextOverrides,
      imageOverride,
      enableOverrides,
    }
  },
`

// Must follow DzHeroSchemaProps
export const dzHeroProps = groq`
  _type == '${dzHeroTypeSchema.name}' => {
    'props': {
      title,
      headingOverride,
      subHeadingOverride,
      secondaryTitleOverride,
      descriptionOverride,
      imageOverride,
      enableOverrides,
    }
  },
`

// Must follow DzHeroCarouselSchemaProps
export const dzHeroCarouselProps = groq`
  _type == '${dzHeroCarouselTypeSchema.name}' => {
    'props': {
      title,
      headingOverride,
      pictures,
      enableOverrides,
    }
  },
`

// Must follow DzInterstitialTypeProps
export const dzInterstitialProps = groq`
  _type == '${dzInterstitialTypeScheme.name}' => {
    'props': {
      title,
      split,
      imageOverride,
      enableOverrides,
    }
  },
`

// Must follow DzSplitTypeProps
export const dzSplitProps = groq`
  _type == '${dzSplitTypeSchema.name}' => {
    'props': {
      title,
      splitType,
      reverse,
      animate,
      imageOverride,
      enableOverrides,
    }
  },
`

// Must follow DzTitleTypeProps
export const dzTitleProps = groq`
  _type == '${dzTitleTypeSchema.name}' => {
    'props': {
      title,
      enableOverrides,
    }
  },
`
