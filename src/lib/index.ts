import { configureStore } from '@reduxjs/toolkit'
import { bookMarkSlice } from './features/bookMarkSlice'

export const store = configureStore({
  reducer:{
    fake: () => "hello redux",
    bookMark:  bookMarkSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch