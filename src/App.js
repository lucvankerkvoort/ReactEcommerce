import { useEffect, useContext } from "react";
import Cart from "./Components/Cart";
import Store from "./Components/Store";
import { store } from "./Services";
function App() {
  const { dispatch, inventory } = useContext(store);

  useEffect(() => {
    dispatch({ type: "setInventory", payload: inventory });
  }, []);

  return (
    <div className="App">
      <Store />
      <Cart />
    </div>
  );
}

export default App;
