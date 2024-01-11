import { configureStore,  } from '@reduxjs/toolkit'
import getUser from '../features/Showslice'
export const store = configureStore({
  reducer: {
    app: getUser
    
  },
})

