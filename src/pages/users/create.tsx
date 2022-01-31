import { Box, Divider, Flex, Heading, HStack, VStack, SimpleGrid, Button } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'

export default function UserCreate() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW='1480px' mx='auto' px='6'>
                <Siderbar />
                <Box flex='1' borderRadius='8px' bg='gray.800' p={['6', '8']}>
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' w='100%' spacing={['6', '8']}>
                            <Input name='name' label='Nome completo' />
                            <Input name='email' type='email' label='E-mail' />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' w='100%' spacing={['6', '8']}>
                            <Input name='password' type='password' label='Senha' />
                            <Input name='password_confirmation' type='password' label='Confirmação da senha' />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            <Button colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}