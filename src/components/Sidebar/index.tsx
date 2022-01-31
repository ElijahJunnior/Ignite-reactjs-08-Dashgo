import { Box, DrawerBody, DrawerHeader, useBreakpointValue } from '@chakra-ui/react';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

export function Siderbar() {

    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    return (

        (isDrawerSidebar) ? (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>
                        <DrawerCloseButton mt='6' />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer >
        ) : (
            <Box as='aside' w='64' mr='8'>
                <SidebarNav />
            </Box>
        )
    )

}