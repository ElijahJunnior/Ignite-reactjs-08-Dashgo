import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form" flexDir="column" bg="gray.800"
        width="100%" maxWidth="360px" p="8" borderRadius={8}
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor='email'>E-Mail</FormLabel>
            <Input
              name="email" id="email" type="email"
              focusBorderColor="pink.500" bg="gray.900" variant="filled" size="lg"
              _hover={{
                bgColor: "gray.900"
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password" id="password" type="password"
              focusBorderColor="pink.500" bg="gray.900" variant="filled" size="lg"
              _hover={{
                bgColor: "gray.900"
              }}
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
