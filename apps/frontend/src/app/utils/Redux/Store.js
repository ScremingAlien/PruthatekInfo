import { configureStore } from '@reduxjs/toolkit'
import { HomeSliceReducers } from './slices/HomePage.slice'

export default configureStore({
     reducer: {
          HomeSlice: HomeSliceReducers
     },
})



