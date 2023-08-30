import { Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import Cart from "./Cart";
const Router = ()=>{
    return (
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="recommended-product" element={<Cart/>}/>
        </Routes>
        
    )
}
export default Router;