// NEXT / REACT 
import { useState } from 'react'
import NextLink from 'next/link'

// CHAKRA 
import { Box, Button, Checkbox, Flex, Link } from '@chakra-ui/react'
import { Heading, Icon, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

// REACT ICONS
import { RiAddLine } from 'react-icons/ri'

// COMPONENTS
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'
import { getUsers, useUsers } from '../../services/hooks/useUsers'
import { Pagination } from '../../components/Pagination'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'
import { GetServerSideProps } from 'next'

// export default function UserList({ users }) {

export default function UserList() {

    const [page, setPage] = useState(1);

    // // usando o react query para armazenar o consumo no cash em um diretorio chamado users 
    // const { isLoading, isRefetching, data, error } = useUsers(page, {
    //     initialData: users
    // });

    // usando o react query para armazenar o consumo no cash em um diretorio chamado users 
    const { isLoading, isRefetching, data, error } = useUsers(page);

    // cria uma variavel com o breackpoint atual parar usar no designer da tela 
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    async function handlePrefetchUser(userId: string) {

        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)
            return response.data
        }, {
            staleTime: 1000 * 60 * 10 // 10 Minutos
        })

    }

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
                        <NextLink href='/users/create' passHref>
                            <Button
                                as='a' size='sm' fontSize='sm' colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='28' />}
                            >
                                Criar novo
                            </Button>
                        </NextLink>
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
                                            data.users?.map(user => (
                                                <Tr key={user.id}>
                                                    <Td px={['4', '4', '6']}>
                                                        <Checkbox colorScheme='pink' />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Link color="purple.400" onMouseEnter={() => { handlePrefetchUser(user.id) }}>
                                                                <Text fontWeight='bold'>{user.name}</Text>
                                                            </Link>
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
                                <Pagination
                                    totalCountOfRegisters={data?.totalCount || 0}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        )
                    }
                </Box>
            </Flex >
        </Box >
    )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     const { users, totalCount } = await getUsers(1);
//     console.log('log_result', users)
//     return {
//         props: {
//             users
//         }
//     };
// }