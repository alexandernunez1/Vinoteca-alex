import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route
          path="/varietalproducto/:varietal"
          element={<ItemListContainer />}
        />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
