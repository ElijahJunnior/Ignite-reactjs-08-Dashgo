import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Elias Jr</Text>
                <Text color='gray.300' fontSize='small'>
                    elias@go2sistemas.com.br
                </Text>
            </Box>
            <Avatar size='md' name='Elias Jr' />
        </Flex>
    )
}