import { configureStore } from "@reduxjs/toolkit";
import reducersFunction from "./reducers";
const store = configureStore({
      reducer:{
         product: reducersFunction
      }
})
export default store;