import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotalPrice } from '../../redux/selectors';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../../redux/products/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  if (cartItems.length === 0) {
    return <p>Your basket is empty</p>;
  }

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>
              <h4>{item.title}</h4>
              <p>Price: $ {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <strong>Total:</strong> $ {totalPrice}
        </div>
        <button onClick={() => dispatch(clearCart())}>
          Clear Basket
        </button>
      </div>
    </div>
  );
}