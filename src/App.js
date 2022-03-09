import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage";
import "./App.css";
import Header from "./components/header/header";
import Checkout from "./pages/checkout/checkout";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
