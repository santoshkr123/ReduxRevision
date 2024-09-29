import { createSlice } from "@reduxjs/toolkit";

const productSlice  = createSlice({
    name : 'product',
    initialState : null ,
    reducers : {

        storeProduct:(state,action)=>{
            state = action.payload
            return null
            
        },

        removeProduct : (state)=>{
            return null

        }
    }
})

const {storeProduct,removeProduct}=productSlice.actions
export default productSlice.reducer