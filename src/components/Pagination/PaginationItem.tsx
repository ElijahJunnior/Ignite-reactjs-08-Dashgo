import { Button } from "@chakra-ui/react"

interface PaginationItenProps {
    pageNumber: number,
    isCurrent?: boolean
    onPageChange: (page: number) => void
}

export function PaginationIten({ pageNumber, isCurrent = false, onPageChange }: PaginationItenProps) {
    if (isCurrent) {
        return (
            <Button
                size='sm' fontSize='xs' w='4' colorScheme='pink'
                disabled _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {pageNumber}
            </Button>
        )
    } else {
        return (
            <Button
                size='sm' fontSize='xs' w='4' bg='gray.700'
                _hover={{ bg: 'gray.500' }}
                onClick={() => { onPageChange(pageNumber) }}
            >
                {pageNumber}
            </Button>
        )
    }
}