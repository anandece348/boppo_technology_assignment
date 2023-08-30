import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import '../style/style.css';
import { product_actions } from "../store/reducers";

const Cart = ()=>{
    const product_data = useSelector(state => state.product.product_data);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchApi = async ()=>{
              try{
                const response = await fetch(' https://boppotech.github.io/react-task-json.github.io/reactjob.json');
                const result = await response.json();
                const dataWithId = result.map((item, index)=>{
                      return {...item, id: index}
                })
                dispatch(product_actions.updateProductData(dataWithId));
              }
              catch(error){
                console.log(error);
              }
        }
        fetchApi();
    },[])

     
     return (
         <React.Fragment>
            <div>
                <div  ><h1 style={{paddingLeft:'1px'}}>Recommended Items</h1></div>
                <div className="cart_container">
                {
                    product_data.map((item, index)=>{
                        return <div key={index} className="cart">
                            <img src={item.images.nodes[0].src} width={200} alt="card_image"/>
                            <div>
                                <div className="titleText">{item.title}</div>
                                <div className="flexCenter price_section">
                                    <div>
                                        <span style={{padding:'5px', color:'var(--primary)'}}>{item.price.currencyCode}</span>
                                        <span style={{padding:'5px', color:'var(--primary)'}}>{item.price.amount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                
                </div>
                <button type="button" className="button product_button">ADD TO CART</button>

            </div>
            <hr/>
            <div>
                <div><h1>All Products</h1></div>
                <div className="cart_container">
                {
                    product_data.map((item, index)=>{
                        return <div key={index} className="cart">
                            <img src={item.images.nodes[0].src} width={200} alt="card_image"/>
                            <div>
                                <div className="titleText">{item.title}</div>
                                <div className="flexCenter price_section">
                                    <div>
                                        <span style={{padding:'5px', color:'var(--primary)'}}>{item.price.currencyCode}</span>
                                        <span style={{padding:'5px', color:'var(--primary)'}}>{item.price.amount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                
                </div>
                <button type="button" className="button product_button">ADD TO CART</button>

            </div>

         </React.Fragment>
     )
}
export default Cart;