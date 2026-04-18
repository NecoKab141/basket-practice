import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import BasketPage from './pages/BasketPage/BasketPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;