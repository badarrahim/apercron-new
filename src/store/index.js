import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import web3Slice from './web3-slice'

export const store = configureStore({
  reducer: {
    web3Slice:web3Slice,
  },
  // middleware: [applyMiddleware(thunk), ...getDefaultMiddleware()]
})