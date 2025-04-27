import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Burgers } from "./pages/Burgers";
import { Sides } from "./pages/Sides";
import { Drinks } from "./pages/Drinks";
import { Deals } from "./pages/Deals";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/menu/deals" element={<Deals />} />
          <Route path="/menu/burgers" element={<Burgers />} />
          <Route path="/menu/sides" element={<Sides />} />
          <Route path="/menu/drinks" element={<Drinks />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
