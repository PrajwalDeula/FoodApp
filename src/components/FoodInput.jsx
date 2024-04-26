import styles from "../components/FoodInput.module.css"
const FoodInput = ({handleKeyDown}) =>{
return(
    <input type="text" placeholder="Enter the value added by user"
    className={styles.foodInput}
    onKeyDown ={handleKeyDown}
    ></input>
)
}

export default FoodInput