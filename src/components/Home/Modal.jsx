import { useDispatch, useSelector } from "react-redux";
import '../style/style.css';
import { product_actions } from "../store/reducers";
import { useState } from "react";
import { NavLink } from "react-router-dom";
 
const Modal = ({selectedCard})=>{
    const isModalOpen = useSelector(state => state.product.isModalOpen);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const [isDisabledIncrement, setIsDisabledIncrement] = useState(false);
    const [isDisabledDecrement, setIsDisabledDecrement] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [others, setOthers]  = useState(false);


    const handleIncrement = ()=>{
          setTotalPrice(totalPrice => totalPrice + parseInt(selectedCard.price.amount))
          if(value === selectedCard.quantity){
            setIsDisabledIncrement(true);
            setIsDisabledDecrement(false);
          }
          else{
            setValue(value => value + 1);
            setIsDisabledIncrement(false);
            setIsDisabledDecrement(false);
          }
          
    }
    const handleDecrement = ()=>{
          setTotalPrice(totalPrice => totalPrice -  parseInt(selectedCard.price.amount))
          if(value === 0){
            setIsDisabledDecrement(true);
            setIsDisabledIncrement(false);
            
          }
          else if(value !== 0){
            setValue(value => value - 1);
            setIsDisabledDecrement(false);
            setIsDisabledIncrement(false);
             
              
          }
          
    }
    const handleCancel = ()=>{
         dispatch(product_actions.toggleModalOpen());
         setIsDisabledDecrement(true);
         setIsDisabledIncrement(false)

    }
    const handleBack = ()=>{
        dispatch(product_actions.toggleModalOpen());
        setIsDisabledDecrement(true);
        setIsDisabledIncrement(false)
    }
    const handleExplore = ()=>{
          setOthers(!others);
          
    }
    
    return (
        <div className="modal">
            <div className="modal-section">
                <div>
                    <img src={selectedCard ?  selectedCard.images.nodes[0].src : null} width={150}/>
                </div>
                <div>
                     <div>{selectedCard ? selectedCard.title : null}</div>
                     {
                       selectedCard ? selectedCard.attributes.map((item, index)=>{
                            return <div key={index}>
                                    <span style={{paddingRight:'10px'}}>{item.name} : </span>
                                    <span>{item.value}</span>
                            </div>
                        }) : null
                     }
                    <div >
                            <button className="quantity_update" onClick={handleDecrement} disabled={isDisabledDecrement || value === 0}>-</button>
                        <div className="quantity_value">{value}</div>
                        <button className="quantity_update" onClick={handleIncrement} disabled={isDisabledIncrement ||  (selectedCard ? selectedCard.quantity : null) === value}>+</button>
                    </div>
                </div>
            </div>
            <div className="total_price"> 
                <div>
                    Subtotal
                </div>
                <div><span style={{padding:'10px'}}>{selectedCard ? selectedCard.price.currencyCode : null}</span> {totalPrice}</div>
            </div>
            <hr/>
            <div className="checkout">
              <button type="button" className="button checkout-button">Check Out</button>
            </div>
            <div className="flexCenter modalToggle">
                <button type="button" className="button back_button" onClick={handleCancel}>Cancel</button>
                <button type="button" className="button cancel_button" onClick={handleBack}>Back</button>
            </div>
            <div style={{display: 'flex',justifyContent:'center', padding:'10px'}}><NavLink to='/recommended-product'>Explore More</NavLink>
            </div>
             
        </div>
    )
}
export default Modal;