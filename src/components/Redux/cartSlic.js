import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    AddItem: (state, action) => {
      let exisItem = state.find((item)=>item.id===action.payload.id)
      if(exisItem) {
       return state.map((item)=>(item.id===action.payload.id?{...item, QTY:item.QTY+1}:item)
      )}
      else {
      state.push(action.payload)
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrimentQTY:(state, action)=>{
      return state.map((item)=>(item.id===action.payload?{...item, QTY:item.QTY+1}:item))
    },
    DecrementQTY:(state, action)=>{
      return state.map((item)=>(item.id===action.payload?{...item, QTY:item.QTY-1}:item))
    }
  }
});

export const { AddItem, RemoveItem, IncrimentQTY, DecrementQTY } = cartSlice.actions;

export default cartSlice.reducer;
