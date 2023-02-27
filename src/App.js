import './App.css';
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProduct from './pages/AddProduct';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage/>} />
       
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path='/carts' element={<CartPage />} />

        <Route path='/wishlists' element={<WishlistPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />


      </Routes>

<Footer />


    </Router>
  
  );
}

export default App;
