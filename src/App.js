import HomePage from "./pages/homepage/homepage.js";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage.js";
import "./App.css";
import Header from "./components/header/header.js";
import Checkout from "./pages/checkout/checkout.js";

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
