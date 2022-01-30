import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileDate?: boolean
}

export function Profile({ showProfileDate = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileDate && (
                <Box mr='4' textAlign='right'>
                    <Text>Elias Jr</Text>
                    <Text color='gray.300' fontSize='small'>
                        elias@go2sistemas.com.br
                    </Text>
                </Box>
            )}
            <Avatar size='md' name='Elias Jr' />
        </Flex>
    )
}