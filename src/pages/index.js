import React from 'react'
import { Link } from 'gatsby'
import Avatar from '../components/Avatar'
import Button from '../components/Button'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Avatar />
    <Button />
    <h1>
      Learn to <br />
      design and code React apps
    </h1>
    <p>
      Complete courses about the best tools and design systems. Prototype and
      build apps with React and.
    </p>
  </Layout>
)

export default IndexPage
