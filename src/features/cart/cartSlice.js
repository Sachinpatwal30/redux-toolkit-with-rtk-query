import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalAmount:0

}

const cartSlice = createSlice({

    name: 'carts',
    initialState,
    reducers: {


        addToCart: (state, action)=>{

            const existingCartProductIndex= state.cartItems.findIndex((item)=> item?.product?.id===action.payload?.product?.id)

            if(existingCartProductIndex >=0)
            {

                state.cartItems[existingCartProductIndex].qty+=1;
            }
            else
            {

                let assembledItem;

                if(action.payload.qty>1){

                    assembledItem={...action.payload, qty: action.payload.qty}

                    state.cartItems.push(assembledItem);

                }else
                {
                    assembledItem={...action.payload, qty:1};
                    state.cartItems.push(assembledItem);

                }

            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));



        },

        clearAllCart:(state, action)=>{

            state.cartItems=[];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },

        removeItem: (state, action)=>{

            const updatedCartItems = state.cartItems.filter((item) => item?.product?.id !== action.payload?.product?.id)
            state.cartItems=updatedCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },

        calculateTotalAmount:(state,action)=>{

            state.cartTotalAmount = state.cartItems.reduce((acc, item) => acc + (item.product?.price * Number(item.qty)), 0);


        },

        incrementQty:(state, action)=>{

            let eachCartProductIndex = state.cartItems.findIndex((item) => item?.product?.id === action.payload?.product?.id);
            
            //console.log('each Product Index', eachCartIndex);

            // console.log('item cartsItem', JSON.stringify(state.cartsItems[eachCartIndex].product))

            // const eachIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);
            if (eachCartProductIndex >= 0) {
                state.cartItems[eachCartProductIndex].qty += 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }




        },

        decrementQty: (state, action) => {

            let eachCartProductIndex = state.cartItems.findIndex((item) => item?.product?.id === action.payload?.product?.id);

            //console.log('each Product Index', eachCartIndex);

            // console.log('item cartsItem', JSON.stringify(state.cartsItems[eachCartIndex].product))

            // const eachIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);
            if (eachCartProductIndex >= 0) {
                state.cartItems[eachCartProductIndex].qty -= 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }



        }



    }


})


export const { addToCart, clearAllCart, calculateTotalAmount, removeItem, incrementQty, decrementQty} = cartSlice.actions;

export default cartSlice.reducer;