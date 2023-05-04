import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Container/HomePage/HomePage";
import ProductPage from "./Container/ProductPage/ProductPage";

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
