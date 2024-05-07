import Navbar from "./compoenents/Navbar";
import ProductsList from "./compoenents/ProductsList";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./compoenents/ProductDetails";
import About from "./compoenents/About";
import Contact from "./compoenents/Contact";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductsList />
            </>
          }
        />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />



      </Routes>
    </div>
  );
}

export default App;
