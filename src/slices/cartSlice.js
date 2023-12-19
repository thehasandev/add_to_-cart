import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartitem: localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) :[],
  },
  reducers: {

    addtocart: (state,action) =>{
     if(state.cartitem.length>0){
        let arr =[]
       state.cartitem.map((item)=>{
        if(item.name==action.payload.name){
            item.quantity++
            arr.push(item.name)
            
            
        }
       })
       if(arr.indexOf(action.payload.name)==-1){
        state.cartitem.push(action.payload)
        localStorage.setItem("cartData",JSON.stringify(state.cartitem))
       }
     }else{
         state.cartitem.push(action.payload)
        localStorage.setItem("cartData",JSON.stringify(state.cartitem))
     }
    },

    removecart: (state,action) =>{
        state.cartitem.map((item,index)=>{
            if(item.name==action.payload.name){
               state.cartitem.splice(index,1)
            }
        })
    },

    increment: (state,action) =>{
        state.cartitem.map((item,index)=>{
            if(item.name==action.payload.name){
               item.quantity++
            }
        })
    },

    decrement: (state,action) =>{
        state.cartitem.map((item,index)=>{
            if(item.name == action.payload.name){
               if(item.quantity>1){
                item.quantity--
               }else{
                 
               }
            }
        })
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addtocart,removecart,increment,decrement } = cartSlice.actions

export default cartSlice.reducer