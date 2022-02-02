import { Flex, Button, Stack, } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string,
  password: string
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    // codigo para fazer uma função assincrona esperar por um determinado tempo
    // await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form" flexDir="column" bg="gray.800"
        width="100%" maxWidth="360px" p="8" borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email" type="email" label='E-mail'
            error={errors.email}
            {...register('email', {
              required: "Email obrigatorio"
            })}
          />
          <Input
            name="password" type="password" label="Senha"
            error={errors.password}
            {...register('password', {
              required: "Senha obrigatoria"
            })}
          />
        </Stack>
        <Button
          type="submit" mt="6" colorScheme="pink" size='lg'
          _focus={{
            border: '1px',
            borderColor: 'pink.300',
          }}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
