import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { memo, useState } from "react";
import styles from "./HomeItem.module.css";

const HomeItem = memo(({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementFound = bag[item.id] !== undefined;
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeToBag(item.id));
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt={item.item_name} />
        <div className={styles.ratings}>
          <span className={styles.ratingValue}>{item.rating.stars}</span>
          <span className={styles.ratingStar}>⭐</span>
          <span className={styles.ratingSeparator}>|</span>
          <span className={styles.ratingCount}>{item.rating.count}</span>
        </div>
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.brand}>{item.company}</h3>
        <h4 className={styles.name}>{item.item_name}</h4>
        <div className={styles.price}>
          <span className={styles.priceCurrent}>Rs. {item.current_price}</span>
          <span className={styles.priceOriginal}>Rs. {item.original_price}</span>
          <span className={styles.priceDiscount}>({item.discount_percentage}% OFF)</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button 
          className={`${styles.wishlistBtn} ${isWishlisted ? styles.wishlisted : ''}`}
          onClick={toggleWishlist}
        >
          {isWishlisted ? <AiFillHeart /> : <AiOutlineHeart />}
          <span>WISHLIST</span>
        </button>
        
        {elementFound ? (
          <button className={`${styles.bagBtn} ${styles.removeBtn}`} onClick={handleRemoveFromBag}>
            REMOVE FROM BAG
          </button>
        ) : (
          <button className={`${styles.bagBtn} ${styles.addBtn}`} onClick={handleAddToBag}>
            ADD TO BAG
          </button>
        )}
      </div>
    </div>
  );
});

export default HomeItem;
