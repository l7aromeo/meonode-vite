import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    name: 'My App',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
  },
})

export const { setName } = appSlice.actions
export default appSlice.reducer
