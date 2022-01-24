export const ButtonSidebar = {
  baseStyle: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    borderRadius: '2xl',
    py: 3,
    px: 3,
    _active: {
      bg: 'inherit',
      borderColor: 'transparent',
    },
  },
  variants: {
    active: {
      bg: 'white',
      boxShadow: 'rgb(0 0 0 / 4%) 0px 7px 11px',
    },
  },
}
