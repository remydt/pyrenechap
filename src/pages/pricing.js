import {Divider, Heading, List, ListItem, Stack, Text} from "@chakra-ui/core"
import React from "react"

import Layout from "../components/layout.js"

const PricingPage = () => (
  <Layout>
    <Stack>
      <Heading as="h1" size="2xl">
        Tarifs
      </Heading>
      <Heading as="h2" size="sm" fontWeight="normal">
        Découvrez nos tarifs.
      </Heading>
    </Stack>

    <Stack>
      <Heading as="h3" size="lg">
        À la semaine
      </Heading>
      <Divider />
    </Stack>

    <Stack>
      <Heading as="h3" size="lg">
        À la demande
      </Heading>

      <Divider />

      <List styleType="disc">
        <ListItem>La nuitée par personne: 40€</ListItem>
        <ListItem>Cure de 3 semaines: 1150€</ListItem>
      </List>
    </Stack>

    <Stack>
      <Heading as="h3" size="lg">
        Informations complémentaires
      </Heading>
      <Divider />
      <Text>Caution : 350€</Text>
      <Text>
        Les tarifs s'entendent "charges non comprises". Chauffage non-inclus.
        Électricité facturée selon le relevé du compteur (effectué à l'arrivée
        et au départ). Bois de chauffage en période hivernale. Taxe de séjour.
      </Text>
      <Text>
        Nous acceptons les <b>chèques</b>, <b>espèces</b> et{" "}
        <b>cartes bancaires</b>.
      </Text>
    </Stack>
  </Layout>
)

export default PricingPage
