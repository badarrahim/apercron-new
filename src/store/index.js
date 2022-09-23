import { configureStore } from '@reduxjs/toolkit'
import web3Slice from './web3-slice'

export const store = configureStore({
  reducer: {
    web3Slice:web3Slice,
  },
})