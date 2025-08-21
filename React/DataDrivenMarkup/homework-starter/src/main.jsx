import ReactDOM from 'react-dom/client';

import { products } from './products';

import './main.css';
import './productCard.css';
import './productCardsList.css';
import { ProductCard } from './productCard';
import { ProductCardList } from './productCardsList';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Реализовать компонент ProductList
reactRoot.render(<ProductCardList products={products} />);
