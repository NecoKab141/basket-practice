import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productsSlice';
import { addToCart } from '../../redux/products/cartSlice';
import { selectProducts, selectProductsLoading, selectProductsError } from '../../redux/selectors';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <p>Price: $ {product.price}</p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}