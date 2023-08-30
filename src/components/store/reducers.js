import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      product_data: [],
      isModalOpen: false
}
const slice = createSlice({
      name: 'product',
      initialState: initialState,
      reducers:{
              updateProductData(state, action){
                console.log(action.payload, 'action payload');
                 state.product_data = action.payload;
              },
              toggleModalOpen(state, action){
                  state.isModalOpen = !state.isModalOpen;
              },
      }
})
export const product_actions = slice.actions;
export default slice.reducer;