import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./Container/ProductPage/ProductPage";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
