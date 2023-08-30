import { useDispatch, useSelector } from "react-redux";
import '../style/style.css';
import { product_actions } from "../store/reducers";
import Modal from "./Modal";
import { useState } from "react";

const Card = ()=>{
    const product_data = useSelector(state => state.product.product_data);
    const isModalOpen = useSelector(state => state.product.isModalOpen);
    const dispatch = useDispatch();
    const [selectedCard, setSelectedCard] = useState();

    const handleCard = (item)=>{
        setSelectedCard(item)
        dispatch(product_actions.toggleModalOpen())
    }
    return(
        <div className="card_container">
          {
            product_data.map((item, index)=>{
                return <div key={index} className="card">
                     <img src={item.images.nodes[0].src} width={100} alt="card_image"/>
                     <div>
                        <div className="titleText">{item.title}</div>
                        <div className="item_description">{item.handle}</div>
                        <div className="flexCenter price_section">
                            <div>
                                <span style={{padding:'5px', color:'var(--primary)'}}>{item.price.currencyCode}</span>
                                <span style={{padding:'5px', color:'var(--primary)'}}>{item.price.amount}</span>
                            </div>
                            <div>
                                <button type="button" className="button" onClick={()=>handleCard(item)}>ADD TO CART</button>
                                {
                                 isModalOpen ? <Modal selectedCard={selectedCard} /> : null
                                }
                            </div>
                        </div>
                     </div>
                </div>
            })
          }
          
        </div>
    )
}
export default Card;