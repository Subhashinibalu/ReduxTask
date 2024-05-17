import { configureStore } from "@reduxjs/toolkit";
import OperationSlice from "./OperationSlice";

// this is used for storing purpose 
export const storeData = configureStore({
    reducer:{
        cart:OperationSlice
    }
})