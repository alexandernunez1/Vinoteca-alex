import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { Footer } from "./components/layout/footer/Footer.jsx";
import { Home } from "./components/pages/Home.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
