// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import {useLanguageContext} from "./context/languageContext";
// import Root from "./routes/root";

function App() {
  const { t } = useLanguageContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product",
      element: <ProductPage/>,
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
