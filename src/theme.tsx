import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em', // 640px
  md: '52em', // 832px
  lg: '64em', // 1024px
  xl: '80em', // 1280px
})

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        'paris-primary': {
          minW: 24,
          borderRadius: 3,
          bgGradient: 'linear(to-tr, #00B0FF, #40C4FF)',
          color: 'white',
          _hover: {
            boxShadow: 'lg',
          },
        },
      },
    },
  },
  colors: {
    grey: '#3c4858',
    black: '#16161D',
    primary: {
      active: '#37a169',
    },
  },
  fonts,
  breakpoints,
})

export default theme
