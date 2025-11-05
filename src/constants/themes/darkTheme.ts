import themeSystem from '@src/constants/themes/themeSystem'
import type { Theme } from '@meonode/ui'

const darkTheme: Theme = {
  mode: 'dark',
  system: {
    ...themeSystem,
    primary: {
      default: '#db924b',
      content: '#110802',
      muted: '#b07a3a',
      hover: '#e6a55e',
    },
    secondary: {
      default: '#3D2F24',
      content: '#F0E5D5',
      muted: '#2c2118',
      hover: '#4e3b2e',
    },
    accent: {
      default: '#4A3222',
      content: '#F0E5D5',
      muted: '#332113',
      hover: '#5c3e2a',
    },
    neutral: {
      default: '#7D2E2E',
      content: '#EEDCDC',
      muted: '#5a2020',
      hover: '#944040',
    },
    base: {
      default: '#261c25',
      medium: '#1d151c',
      deep: '#120b11',
      content: '#c5a061',
      muted: '#191218',
      hover: '#31202e',
    },

    success: {
      default: '#1e5a21',
      content: '#d4edda',
      muted: '#17441a',
      hover: '#28732c',
    },
    warning: {
      default: '#b37400',
      content: '#ffe0b2',
      muted: '#7a5300',
      hover: '#d49a1a',
    },
    error: {
      default: '#9b2222',
      content: '#ffcdd2',
      muted: '#6d1818',
      hover: '#b93a3a',
    },
    danger: {
      default: '#921f1f',
      content: '#ef9a9a',
      muted: '#651616',
      hover: '#b22d2d',
    },
    info: {
      default: '#01579b',
      content: '#b3e5fc',
      muted: '#013a63',
      hover: '#0277bd',
    },

    shadow: {
      default: '0 4px 12px rgba(0, 0, 0, 0.3)',
      sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
      md: '0 2px 6px rgba(0, 0, 0, 0.25)',
      lg: '0 8px 16px rgba(0, 0, 0, 0.35)',
      xl: '0 12px 24px rgba(0, 0, 0, 0.4)',
      '2xl': '0 16px 32px rgba(0, 0, 0, 0.45)',
    },
  },
}

export default darkTheme
