import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import lightTheme from '@src/constants/themes/lightTheme.ts'
import darkTheme from '@src/constants/themes/darkTheme.ts'

export interface ThemeState {
  mode: 'light' | 'dark'
  system: typeof lightTheme | typeof darkTheme
}

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'dark' ? 'dark' : 'light'
  }
  return 'light'
}

const localTheme = getInitialTheme()

const initialState: ThemeState = {
  mode: getInitialTheme(),
  system: localTheme === 'light' ? lightTheme : darkTheme,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.mode === 'light') {
        state.mode = 'dark'
        state.system = darkTheme
      } else {
        state.mode = 'light'
        state.system = lightTheme
      }
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload
      state.system = action.payload === 'light' ? lightTheme : darkTheme
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
