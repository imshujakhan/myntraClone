import { useSelector } from "react-redux";
import styles from "./BagSummary.module.css";

const BagSummary = () => {
  const CONVENIENCE_FEES = 99;
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  
  const finalItems = items.filter((item) => bag[item.id]);

  let totalItem = Object.values(bag).reduce((sum, qty) => sum + qty, 0);
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    const quantity = bag[item.id];
    totalMRP += item.original_price * quantity;
    totalDiscount += (item.original_price - item.current_price) * quantity;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div>
      <div>
        <div className={styles.priceHeader}>PRICE DETAILS ({totalItem} Items) </div>
        <div className={styles.priceItem}>
          <span>Total MRP</span>
          <span>₹{totalMRP}</span>
        </div>
        <div className={styles.priceItem}>
          <span>Discount on MRP</span>
          <span className={styles.discount}>
            -₹{totalDiscount}
          </span>
        </div>
        <div className={styles.priceItem}>
          <span>Convenience Fee</span>
          <span>₹99</span>
        </div>
        <hr />
        <div className={styles.priceFooter}>
          <span>Total Amount</span>
          <span>₹{finalPayment}</span>
        </div>
      </div>
      <button className={styles.placeOrderBtn}>
        <div>PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
