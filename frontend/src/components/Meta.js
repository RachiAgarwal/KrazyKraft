import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to KrazyKraft',
  description: 'We sell best products at affordable prices',
  keywords: 'buy handicrafts, buy scraps, affordable items',
}

export default Meta
