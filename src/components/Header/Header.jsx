import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../../redux/selectors';

export default function Header() {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <header>
      <nav>
        <div>
          <h1>Food Store</h1>
        </div>
        <div>
          <Link to="/">Products</Link>
          <Link to="/basket">Basket ({totalItems})</Link>
        </div>
      </nav>
    </header>
  );
}