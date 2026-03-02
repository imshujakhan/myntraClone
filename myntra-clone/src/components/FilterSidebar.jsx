import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../store/filterSlice";
import styles from "./FilterSidebar.module.css";

const FilterSidebar = () => {
  const { selectedCategory, sortBy } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  const categories = ["All", "Men", "Women", "Kids"];

  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h3>Categories</h3>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ""}`}
              onClick={() => dispatch(filterActions.setCategory(category))}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => dispatch(filterActions.setSortBy(e.target.value))}
          className={styles.sortSelect}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
