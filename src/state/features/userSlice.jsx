import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

  name: 'users',
  initialState: {
    user: null,
  },
  reducers: {
    SignIn: (state, action) => {
      state.user = action.payload;
    },
    Signout: (state) => {
        state.user = null 
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {SignIn, Signout} = userSlice.actions

export default userSlice.reducer