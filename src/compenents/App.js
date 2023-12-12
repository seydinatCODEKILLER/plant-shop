import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/Layout.css";
import { useEffect, useState } from "react";

function App() {
  const cartSauvegarder = localStorage.getItem("key");

  const [cart, setCart] = useState(
    cartSauvegarder ? JSON.parse(cartSauvegarder) : []
  );
  const cartJson = JSON.stringify(cart);
  useEffect(() => {
    localStorage.setItem("key", cartJson);
  }, [cartJson]);

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
