import {Heading, Stack} from "@chakra-ui/core"
import React from "react"

import Layout from "../components/layout.js"

const DiscoverPage = () => (
  <Layout>
    <Stack>
      <Heading as="h1" size="2xl">
        Le gîte
      </Heading>
      <Heading as="h2" size="sm" fontWeight="normal">
        Pyrén' Échap est un gîte situé dans les Hautes-Pyrénées.
      </Heading>
    </Stack>
  </Layout>
)

export default DiscoverPage
