import buildProductCard from '../components/productCard.js';

export default function renderProducts(productsToRender) {
  const catalogList = document.querySelector('.catalog__list');
  if (!catalogList) return;

  catalogList.innerHTML = '';

  productsToRender.forEach(product => {
    const item = document.createElement('li');
    item.classList.add('catalog__item');

    item.innerHTML = buildProductCard(product);
    catalogList.appendChild(item);
  });
}