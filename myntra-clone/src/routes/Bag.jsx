import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import styles from "./Bag.module.css";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => bag[item.id]);
  return (
    <main>
      <div className={styles.bagPage}>
        {Object.keys(bag).length > 0 ? (
          <>
            <div className={styles.bagItems}>
              {finalItems.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.bagSummary}>
              <BagSummary />
            </div>
          </>
        ) : (
          <div className={styles.emptyBag}>
            <h2>Your bag is empty</h2>
            <p>Add items to get started</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Bag;
