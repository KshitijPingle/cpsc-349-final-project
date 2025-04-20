import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
