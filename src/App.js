// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import CategoryPage from './containers/CategoryPage';
// import Root from "./routes/root";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: "/product",
  //     element: <ProductPage/>,
  //   },
  //   {
  //     path: "/category",
  //     element: <CategoryPage />,
  //   },
  // ]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
