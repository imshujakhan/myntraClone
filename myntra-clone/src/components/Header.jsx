import { BsPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../store/filterSlice";
import styles from "./Header.module.css";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const bagCount = Object.keys(bag).length;
  const searchQuery = useSelector((store) => store.filter.searchQuery);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterActions.setSearchQuery(e.target.value));
  };

  const handleCategoryClick = (category) => {
    dispatch(filterActions.setCategory(category));
    dispatch(filterActions.setSearchQuery(""));
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img
            className={styles.logo}
            src="../images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className={styles.navBar}>
        <Link to="/" onClick={() => handleCategoryClick("Men")}>Men</Link>
        <Link to="/" onClick={() => handleCategoryClick("Women")}>Women</Link>
        <Link to="/" onClick={() => handleCategoryClick("Kids")}>Kids</Link>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          placeholder="Search for products, brands and more"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.actionBar}>
        <div className={styles.actionContainer}>
          <BsPersonFill className={styles.actionIcon} />
          <span className={styles.actionName}>Profile</span>
        </div>

        <div className={styles.actionContainer}>
          <FaHeart className={styles.actionIcon} />
          <span className={styles.actionName}>Wishlist</span>
        </div>

        <Link className={styles.actionContainer} to="/bag">
          <BsBagFill className={styles.actionIcon} />
          <span className={styles.actionName}>Bag</span>
          {bagCount > 0 && <span className={styles.bagCount}>{bagCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
