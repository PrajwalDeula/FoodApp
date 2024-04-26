import { useState } from "react";
import Item from "./Item";
const FoodItems = ({items}) =>{
  
  let [activeState, setActiveState] = useState([]);
  let buyButton = (item,event) =>{
    let newItems = [...activeState,item];
        setActiveState(newItems);
  }
return(
    <ul className="list-group">{
        items.map((item) =><Item key ={item} foodItem={item}
        bought = {activeState.includes(item)}
      handleBuyButton = {(event)=>buyButton(item,event)}
        ></Item>)
       
      }</ul>
)
}

export default FoodItems