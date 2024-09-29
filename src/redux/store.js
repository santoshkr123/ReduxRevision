import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slice/product-slice'

const store = configureStore({
   reducer :{
    productSlice

   }
})

export default store