import { useEffect, useContext } from "react";
import Cart from "./Components/Cart";
import Store from "./Components/Store";
import Product from "./Components/Product";
import { store } from "./Services";
function App() {
  const { dispatch, inventory, product } = useContext(store);

  useEffect(() => {
    dispatch({ type: "setInventory", payload: inventory });
  }, []);

  return (
    <div className="App">
      {Object.keys(product).length > 0 ? <Product /> : <Store />}
      <Cart />
    </div>
  );
}

export default App;
