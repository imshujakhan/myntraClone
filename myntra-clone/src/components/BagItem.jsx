import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoMdClose } from "react-icons/io";
import styles from "./BagItem.module.css";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const quantity = bag[item.id] || 1;
  
  const handleRemoveFromCart = () => {
    dispatch(bagActions.removeToBag(item.id));
  };

  const incrementQuantity = () => {
    if (quantity < 10) {
      dispatch(bagActions.updateQuantity({ id: item.id, quantity: quantity + 1 }));
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      dispatch(bagActions.updateQuantity({ id: item.id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.removeBtn} onClick={handleRemoveFromCart}>
        <IoMdClose />
      </button>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt={item.item_name} />
      </div>
      <div className={styles.details}>
        <div className={styles.company}>{item.company}</div>
        <div className={styles.itemName}>{item.item_name}</div>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>Rs {item.current_price * quantity}</span>
          <span className={styles.originalPrice}>Rs {item.original_price * quantity}</span>
          <span className={styles.discount}>
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className={styles.returnPeriod}>
          <span>{item.return_period} days</span> return available
        </div>
        <div className={styles.delivery}>
          Delivery by <span>{item.delivery_date}</span>
        </div>
        <div className={styles.actions}>
          <div className={styles.quantitySelector}>
            <label className={styles.quantityLabel}>Qty:</label>
            <div className={styles.quantityControls}>
              <button onClick={decrementQuantity} className={styles.qtyBtn}>−</button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button onClick={incrementQuantity} className={styles.qtyBtn}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
