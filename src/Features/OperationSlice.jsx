import { createSlice } from "@reduxjs/toolkit";

const OperationSlice = createSlice({
    name:'cart',
    initialState:[], //initially the value is empty
    reducers:{
        datas:(state,action)=>{
            return action.payload;// will return the json data as state

        },
        addToCart:(state,action)=>{
            let {id} = action.payload;
            let quantity = 1;
            return state.map((element) => {
                if (element.id === id ) {
                  return {
                    ...element,
                    quantity: (element.quantity  || quantity) + 1,
                    productPrice:
                      element.productPrice + element.price ||
                      element.price + element.price,
                     stock: element.stock - 1,
                    
                  };
                }
                return element;
              });
              
        },
        deleteFromCart:(state,action)=>{
            let {id} = action.payload;
            return state.map((element) => {
                if (element.id === id ) {
                  return {
                    ...element,
                    quantity: element.quantity - 1,
                    productPrice:
                     (element.productPrice - element.price) ||
                      element.price - element.price,
                    stock: element.stock + 1,
                  };
                }
                return element;
              });

        },
        removeFromCart:(state,action)=>{
            let {id} = action.payload;
            return state.filter((product)=>product.id !== id);

        }
    }
})

export const{datas,addToCart,deleteFromCart,removeFromCart}=OperationSlice.actions
export default OperationSlice.reducer