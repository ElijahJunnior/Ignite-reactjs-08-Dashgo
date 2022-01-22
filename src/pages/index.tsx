import { Flex, Button, Stack, } from '@chakra-ui/react'
import { Input } from '../components/Form/input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form" flexDir="column" bg="gray.800"
        width="100%" maxWidth="360px" p="8" borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label='E-mail' />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button
          type="submit" mt="6" colorScheme="pink" size='lg'
          _focus={{
            border: '1px',
            borderColor: 'pink.300',
          }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex >
  )
}
