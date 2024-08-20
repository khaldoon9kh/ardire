import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import CategoryPage from './containers/CategoryPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  