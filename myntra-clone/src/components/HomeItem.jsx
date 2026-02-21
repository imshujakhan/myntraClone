import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

import { FaDeleteLeft } from "react-icons/fa6";
import { MdAddCircleOutline } from "react-icons/md";
import { memo } from "react";
const HomeItem = memo(({ item }) => {
  const dispatch = useDispatch();
  const elementFound = useSelector((store) => store.bag.includes(item.id));

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeToBag(item.id));
  };
  return (
    <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            className=" btn btn-danger btn-remove-bag"
            onClick={handleRemoveFromBag}
          >
            <FaDeleteLeft />
            Remove
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handleAddToBag}>
            <MdAddCircleOutline /> Add to Bag
          </button>
        )}
    </div>
  );
});

export default HomeItem;
