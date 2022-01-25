export const ButtonSidebarIcon = {
  baseStyle: {
    display: 'flex',
    justifity: 'center',
    align: 'center',

    py: 2,
    px: 2.5,
    borderRadius: 'xl',

    _active: {
      bg: 'white',
      transition: 'all .3s ease-out',
    },
  },
  variants: {
    active: {
      transition: 'all .3s ease-in',
      bg: '#40C4FF',
    },
  },
}
