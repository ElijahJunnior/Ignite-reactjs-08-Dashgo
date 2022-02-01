import { Box, Button, Checkbox, Flex, Heading, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW='1480px' mx='auto' px='6'>
                <Siderbar />
                <Box flex='1' borderRadius='8px' bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Link href='/users/create' passHref>
                            <Button
                                as='a' size='sm' fontSize='sm' colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='28' />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de Cadastro</Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Diego Fernandes</Text>
                                        <Text fontSize='sm' color='gray.300'>diegoFernandes@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td> 25 de Maio, 2022</Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Diego Fernandes</Text>
                                        <Text fontSize='sm' color='gray.300'>diegoFernandes@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td> 25 de Maio, 2022</Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Diego Fernandes</Text>
                                        <Text fontSize='sm' color='gray.300'>diegoFernandes@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td> 25 de Maio, 2022</Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Diego Fernandes</Text>
                                        <Text fontSize='sm' color='gray.300'>diegoFernandes@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td> 25 de Maio, 2022</Td>}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex >
        </Box >
    )
}