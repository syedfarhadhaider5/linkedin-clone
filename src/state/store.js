import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../state/features/userSlice";

export default configureStore({
  reducer: {
    Users: userSlice
  }
})
