import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { Footer } from "./components/layout/footer/Footer.jsx";
import { Home } from "@mui/icons-material";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
