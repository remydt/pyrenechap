import {Box, Button, Stack} from "@chakra-ui/core"
import {Link} from "gatsby"
import React from "react"

const Layout = ({children}) => (
  <Box m="auto" maxW="xl" p={4}>
    <Stack as="header" isInline justifyContent="space-between" mb={16}>
      <Button as={Link} to="/" variant="ghost">
        Accueil
      </Button>
      <Button as={Link} to="/discover" variant="ghost">
        Découvrir
      </Button>
      <Button as={Link} to="/pricing" variant="ghost">
        Tarifs
      </Button>
    </Stack>

    <Stack as="main" spacing={32}>
      {children}
    </Stack>
  </Box>
)

export default Layout
