
const buttonTheme = {
    baseStyle: {
        fontWeight: 600,
    },
    sizes: {
        md: {
            h: '44px',
            fontSize: 16,
            px: '24px',
        },
    },
    variants: {
        solid: (props: { colorMode: string; colorScheme: string, variant: string }) => ({
            bg: props.colorScheme === 'red' 
                ? 'red.500'
                : props.colorMode === 'dark' ? 'primary.500' : 'primary.500',
            color: props.variant === 'outline' ? 'black' : 'white',
            _hover: {
                bg: props.colorScheme === 'red'
                    ? 'red.600'
                    : props.colorMode === 'dark' ? 'primary.700' : 'primary.700',
            },
            _active: {
                bg: props.colorScheme === 'red'
                    ? 'red.700'
                    : props.colorMode === 'dark' ? 'primary.700' : 'primary.700',
            },
        }),
    },
    defaultProps: {
        size: 'md',
        variant: 'solid',
        colorScheme: 'primary',
    },
}

export default buttonTheme;