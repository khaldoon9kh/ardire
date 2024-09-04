import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import CategoryPage from './containers/CategoryPage';
import LoginPage from './containers/AdminLogin';
import AdminDash from './containers/AdminDash';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/dash" element={<AdminDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  