import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    carts:[]
};

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const ItemIndex =  state.carts.findIndex((item)=> item.id === action.payload.id);
            if(ItemIndex >=0){
                state.carts[ItemIndex].qnty +=1;
            }else {
                const temp = {...action.payload,qnty :1} ;
                state.carts = [...state.carts,temp];
            }
        },
           // remove perticular items
        removeToCart:(state,action)=>{
            console.log("removeToCart-action",action);
            const data =  state.carts.filter((e)=> e.id !== action.payload);
            state.carts = data;
        },
        removeSingleItems:(state,action)=>{
            const ItemIndex_dec = state.carts.findIndex((e)=> e.id === action.payload.id);
            console.log("ItemIndex_dec",ItemIndex_dec);
            
            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty -= 1
            }
        },
          // clear cart
          emptycartItem:(state,action)=>{
            state.carts = []
        }
    }
});


export const {addToCart,removeToCart,removeSingleItems,emptycartItem} = cartSlice.actions;
export default cartSlice.reducer;