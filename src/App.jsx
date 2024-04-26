import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App(){
  let [foodItems, setFoodItems] = useState(["roti","dal","naan","milk"]);

  const onKeyDown = (event) =>{
    if(event.key === 'Enter'){
let newFoodItem = event.target.value;
let newItems = [...foodItems,newFoodItem];
setFoodItems(newItems);
event.target.value = "";
    }

  }

return(
<Container>
<FoodInput
handleKeyDown={onKeyDown}

></FoodInput>
 <FoodItems items={foodItems}></FoodItems>

 </Container>
)
}

export default App