import { configureStore } from '@reduxjs/toolkit'
import cartSlic from './cartSlic'

export const store = configureStore({
  reducer: {
    cart:cartSlic
  },
})