import renderProducts from './renderProducts.js';

// рендер + пагинация
export default function renderCards(products) {
  const cardsOnPage = 6;
  let currentPage = 1;

  const list = document.querySelector('.catalog__list');
  const paginationContainer = document.querySelector('.catalog__pagination');

  renderPagination(products.length);
  renderProductsPage(currentPage);

  function renderProductsPage(page) {
    const start = (page - 1) * cardsOnPage;
    const end = start + cardsOnPage;
    const productsToRender = products.slice(start, end);

    renderProducts(productsToRender);
  }

  function renderPagination(totalCount) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalCount / cardsOnPage);
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.classList.add('catalog__pagination-item');

      const btn = document.createElement('button');
      btn.classList.add('catalog__pagination-link');
      btn.textContent = i;
      if (i === currentPage) btn.classList.add('active');

      btn.addEventListener('click', () => {
        currentPage = i;
        renderProductsPage(currentPage);
        renderPagination(totalCount);
      });

      li.appendChild(btn);
      paginationContainer.appendChild(li);
    }
  }
}