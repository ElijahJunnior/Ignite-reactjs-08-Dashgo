import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDragControls } from 'framer-motion'

export default function UserList() {

    // usando o react query para armazenar o consumo no cash em um diretorio chamado users 
    const { isLoading, isRefetching, data, error } = useQuery('users', async () => {
        // usando o fetch para consumir uma lista de users 
        const response = await fetch('http://localhost:3000/api/users');
        // convertendo o resultado em json
        const data = await response.json();
        const users = data.users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                })
            }
        })
        // retornado o resultado para o react query
        return users;
    }, {
        staleTime: 1000 * 5
    })

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
                        <Heading size='lg' fontWeight='normal'>
                            Usuários
                            {/* {!!isFetching && !isLoading && ( */}
                            {!!isRefetching && (
                                <Spinner size="sm" ml="4" color="gray.500" />
                            )}
                        </Heading>
                        <Link href='/users/create' passHref>
                            <Button
                                as='a' size='sm' fontSize='sm' colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='28' />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {
                        isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text>Falha ao obter dados dos usuários.</Text>
                            </Flex>
                        ) : (
                            <>
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
                                        {
                                            data.map(user => (
                                                <Tr key={user.id}>
                                                    <Td px={['4', '4', '6']}>
                                                        <Checkbox colorScheme='pink' />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight='bold'>{user.name}</Text>
                                                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {
                                                        isWideVersion && (
                                                            <Td> {
                                                                user.createdAt
                                                            }</Td>
                                                        )
                                                    }
                                                </Tr>
                                            ))
                                        }
                                    </Tbody>
                                </Table>
                                <Pagination />
                            </>
                        )
                    }
                </Box>
            </Flex >
        </Box >
    )
}