import { extendTheme } from '@chakra-ui/react'

import { ButtonSidebar } from './additions/ButtonSidebar/ButtonSidebar'
import { ButtonSidebarIcon } from './additions/ButtonSidebar/ButtonSidebarIcon'
import { buttonStyles } from './components/button'
import { headingStyles } from './components/Heading'
import { inputStyles } from './components/input'
import { textStyles } from './components/text'
import { breakpoints } from './foundations/breakpoints'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'
import { globalStyles } from './styles'

const theme = extendTheme({
  globalStyles,
  components: {
    ButtonSidebar,
    ButtonSidebarIcon,
    ...buttonStyles,
    ...textStyles,
    ...headingStyles,
    ...inputStyles,
  },
  colors,
  fonts,
  breakpoints,
})

export default theme
