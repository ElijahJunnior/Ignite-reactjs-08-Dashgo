import {
    FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";


interface InputProps extends ChakraInputProps {
    name: string,
    label?: string,
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, ...rest }, ref
) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name} id={name} {...rest}
                focusBorderColor="pink.500" bg="gray.900" variant="filled" size="lg"
                _hover={{
                    bgColor: "gray.900"
                }}
                ref={ref}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)