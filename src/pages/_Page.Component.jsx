import React from 'react'

import CIndex from '../components/components.index.js'

const Page = ({ title, Component, ...props }) => {
  const { Layout } = CIndex

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

export default Page
