import { Box, Divider, Flex, Heading, HStack, VStack, SimpleGrid, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'

import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


type UserCreateFormData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export default function UserCreate() {

    const userCreateFormSchema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha é obrigatória').min(6, 'No mínimo 6 caracteres'),
        password_confirmation: yup.string().oneOf([
            null, yup.ref('password')
        ], 'As senhas precisam ser iguais')
    })

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(userCreateFormSchema)
    });

    const { errors } = formState

    const handleUserCreate: SubmitHandler<UserCreateFormData> = async (values) => {

    }

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW='1480px' mx='auto' px='6'>
                <Siderbar />
                <Box
                    as='form' flex='1' borderRadius='8px' bg='gray.800' p={['6', '8']}
                    onSubmit={handleSubmit(handleUserCreate)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' w='100%' spacing={['6', '8']}>
                            <Input
                                name='name' label='Nome completo'
                                {...register('name')} error={errors.name}
                            />
                            <Input
                                name='email' type='email' label='E-mail'
                                {...register('email')} error={errors.email}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' w='100%' spacing={['6', '8']}>
                            <Input
                                name='password' type='password' label='Senha'
                                {...register('password', {
                                    required: 'password obrigatorio'
                                })} error={errors.password}
                            />
                            <Input
                                name='password_confirmation' type='password'
                                label='Confirmação da senha'
                                {...register('password_confirmation')}
                                error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button
                                type='submit' colorScheme='pink'
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}