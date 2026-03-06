import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import FilterSidebar from "../components/FilterSidebar";
import styles from "./Home.module.css";

const Home = () => {
  const items = useSelector((store) => store.items);
  const { searchQuery, selectedCategory, sortBy } = useSelector((store) => store.filter);

  const filteredItems = items
    .filter((item) => {
      const matchesSearch =
        item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || 
        item.category?.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.current_price - b.current_price;
      if (sortBy === "price-high") return b.current_price - a.current_price;
      if (sortBy === "rating") return b.rating.stars - a.rating.stars;
      return 0;
    });

  return (
    <main className={styles.homePage}>
      <FilterSidebar />
      <div className={styles.productsSection}>
        <div className={styles.itemsContainer}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <HomeItem key={item.id} item={item} />)
          ) : (
            <div className={styles.noResults}>No products found</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
