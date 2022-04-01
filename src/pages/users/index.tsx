// NEXT / REACT 
import { useState } from 'react'
import Link from 'next/link'

// CHAKRA 
import { Box, Button, Checkbox, Flex } from '@chakra-ui/react'
import { Heading, Icon, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

// REACT ICONS
import { RiAddLine } from 'react-icons/ri'

// COMPONENTS
import { Header } from '../../components/Header'
import { Siderbar } from '../../components/Sidebar'
import { useUsers } from '../../services/hooks/useUsers'
import { Pagination } from '../../components/Pagination'

export default function UserList() {

    const [page, setPage] = useState(1);

    // usando o react query para armazenar o consumo no cash em um diretorio chamado users 
    const { isLoading, isRefetching, data, error } = useUsers(page)

    // cria uma variavel com o breackpoint atual parar usar no designer da tela 
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
                                            data.users?.map(user => (
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