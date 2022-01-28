import { Box, Button, Checkbox, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW='1480px' mx='auto' px='6'>
                <Siderbar />
                <Box flex='1' borderRadius='8px' bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Button
                            as='a' size='sm' fontSize='sm' colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='28' />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Diego Fernandes</Text>
                                        <Text fontSize='sm' color='gray.300'>diegoFernandes@email.com</Text>
                                    </Box>
                                </Td>
                                <Td> 25 de Maio, 2022</Td>
                                <Td>
                                    <Button
                                        as='a' size='sm' fontSize='sm' colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex >
        </Box >
    )
}