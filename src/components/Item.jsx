import styles from "../components/Item.module.css";


const Item = ({foodItem, handleBuyButton, bought}) => {

    
return(
    <li className={`${styles["KgItem"]} list-group-item ${bought &&  'active'} `}>
    <span className={styles.KgSpan}>
      {foodItem}</span>
      <button className={`${styles["Button"]} btn btn-info`}
      onClick={handleBuyButton}
      >Click</button>
        </li>
)
}

export default Item