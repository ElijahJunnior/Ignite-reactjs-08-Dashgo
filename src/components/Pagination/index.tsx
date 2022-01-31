import { Box, Button, Stack } from '@chakra-ui/react';
import { PaginationIten } from './PaginationItem';

export function Pagination() {
    return (
        <Stack
            mt='8' spacing='6' direction={['column', 'row']}
            justify='space-between' align='center'
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction='row' spacing='2'>
                <PaginationIten pageNumber={1} isCurrent />
                <PaginationIten pageNumber={2} />
                <PaginationIten pageNumber={3} />
                <PaginationIten pageNumber={4} />
                <PaginationIten pageNumber={5} />
                <PaginationIten pageNumber={6} />
            </Stack>
        </Stack>
    )
}