import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./Container/ProductPage/ProductPage";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Container/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
