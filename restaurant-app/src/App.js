import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home"
import { CheckOut } from "./pages/Checkout"

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
