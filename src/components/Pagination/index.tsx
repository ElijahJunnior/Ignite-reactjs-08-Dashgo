import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { PaginationIten } from './PaginationItem';

interface PaginationProps {
    totalCountOfRegisters: number,
    registeresPerPage?: number,
    currentPage?: number,
    onPageChange: (page: number) => void
}

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((val, index) => {
            return from + index + 1
        })
        .filter(page => page > 0);
}

const siblingsCount = 1;

export function Pagination({
    totalCountOfRegisters, registeresPerPage = 10, currentPage = 1, onPageChange
}: PaginationProps) {

    const lastPage = Math.ceil(totalCountOfRegisters / registeresPerPage);

    const previusPage = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [];

    const nextPage = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : [];

    return (
        <Stack
            mt='8' spacing='6' direction={['column', 'row']}
            justify='space-between' align='center'
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction='row' spacing='2'>

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationIten pageNumber={1} onPageChange={onPageChange} />
                        {currentPage > (2 + siblingsCount) && (
                            <Text color="gray.300" width="8" textAlign="center">...</Text>
                        )}
                    </>
                )}

                {previusPage.length > 0 && previusPage.map(page => (
                    <PaginationIten key={page} pageNumber={page} onPageChange={onPageChange} />
                ))}

                <PaginationIten pageNumber={currentPage} isCurrent onPageChange={onPageChange} />

                {nextPage.length > 0 && nextPage.map(page => (
                    <PaginationIten key={page} pageNumber={page} onPageChange={onPageChange} />
                ))}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && (
                            <Text color="gray.300" width="8" textAlign="center">...</Text>
                        )}
                        <PaginationIten pageNumber={lastPage} onPageChange={onPageChange} />
                    </>
                )}

            </Stack>
        </Stack>
    )

}