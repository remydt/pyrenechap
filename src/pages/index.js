import {Button, Flex, Heading, Stack, Text, Box} from "@chakra-ui/core"
import {Link} from "gatsby"
import React from "react"
import {StaticMap} from "react-map-gl"

import Layout from "../components/layout.js"

const IndexPage = () => (
  <Layout>
    <Stack>
      <Heading as="h1" size="2xl">
        Pyrén' Échap
      </Heading>
      <Heading as="h2" size="sm" fontWeight="normal">
        Votre séjour dans un gîte des <b>Pyrénées</b>.
      </Heading>
    </Stack>

    <Flex>
      <Button as={Link} rightIcon="arrow-forward" to="/pricing">
        Découvrez nos tarifs
      </Button>
    </Flex>

    <Text>
      Nous vous accueillons à <b>Générest</b> dans les Hautes-Pyrénées. Petit
      village dans son écrin vert qui abrite une{" "}
      <b>faune et une flore riches</b> et préservées. De la mi-septembre à la
      mi-octobre, vous pourrez entendre le brame du cerf, l'apercevoir la nuit
      mais également en plein jour. Amateurs de pêche, de randonnées pédestres,
      de ski de fond, de piste ou de raquettes, de vélo sur des routes qui vous
      mènent vers les grands cols des Pyrénées (port de Balès, col des Ares, col
      de Mente, Peyresourde, Aspin, Tourmalet...). Vous pourrez apprécier un bon
      feu de bois en hiver ou une bonne grillade en été dans un grand jardin
      clôturé et herboré.
    </Text>

    <Flex justify="center">
      <Stack direction="row" borderWidth="1px" overflow="hidden" rounded="md">
        <Box width="128px">
          <StaticMap
            width="100%"
            height="100%"
            latitude={43.0316}
            longitude={0.5264}
            zoom={4}
            mapStyle={process.env.MAPBOX_STYLE}
            mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
          />
        </Box>

        <Stack direction="column" justify="space-between" p={4} spacing={4}>
          <Box>
            <Heading as="h5" size="md" fontWeight="semibold">
              Pyrén' Échap
            </Heading>
            <Text>9 chemin de l'Arize, 65150 Générest</Text>
          </Box>

          <Stack isInline>
            <Button as="a" href="tel:0512345678" leftIcon="phone">
              Téléphone
            </Button>

            <Button
              as="a"
              href="mailto:pyrenechap@gmail.com"
              leftIcon="email"
              variant="outline"
            >
              Mail
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Layout>
)

export default IndexPage
