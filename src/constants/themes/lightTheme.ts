import themeSystem from '@src/constants/themes/themeSystem'

const lightTheme = {
  ...themeSystem,
  primary: {
    default: '#000000',
    content: '#ffffff',
    muted: '#bdbdbd',
    hover: '#222222',
  },
  secondary: {
    default: '#370900',
    content: '#fed7a7',
    muted: '#a67c6b',
    hover: '#5a1400',
  },
  accent: {
    default: '#8c3f27',
    content: '#fed7a7',
    muted: '#b97a5a',
    hover: '#a44a2e',
  },
  neutral: {
    default: '#c93400',
    content: '#fff7ed',
    muted: '#e0a899',
    hover: '#e04a1a',
  },
  base: {
    default: '#fff7ed',
    medium: '#feebd3',
    deep: '#fed7a7',
    content: '#7a3205',
    muted: '#f5e1d3',
    hover: '#ffe7c2',
  },

  success: {
    default: '#2E7D32',
    content: '#fef3c5',
    muted: '#81c784',
    hover: '#388e3c',
  },
  warning: {
    default: '#F9A825',
    content: '#fffde7',
    muted: '#ffe082',
    hover: '#ffb300',
  },
  error: {
    default: '#D32F2F',
    content: '#ffebee',
    muted: '#e57373',
    hover: '#e53935',
  },
  danger: {
    default: '#C62828',
    content: '#ffcdd2',
    muted: '#ef9a9a',
    hover: '#d32f2f',
  },
  info: {
    default: '#0288D1',
    content: '#e1f5fe',
    muted: '#81d4fa',
    hover: '#039be5',
  },

  shadow: {
    default: '0 4px 12px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 6px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.15)',
    '2xl': '0 16px 32px rgba(0, 0, 0, 0.2)',
  },
}

export default lightTheme
