import buildBasketItem from '../components/basketItem.js';

export default function addAndDeleteBasket(products) {
  const basketBtn = document.querySelector('.header__user-btn');
  const basket = document.querySelector('.basket');
  const basketList = document.querySelector('.basket__list');
  const basketCount = document.querySelector('.header__user-count');
  const emptyBlock = document.querySelector('.basket__empty-block');
  const orderBtn = document.querySelector('.basket__link.btn');

  // открытие/закрытие корзины
  basketBtn.addEventListener('click', () => {
    basket.classList.toggle('basket--active');
  });

  // обновление общего количества товаров в корзине
  function updateBasketCount() {
    let totalCount = 0;
    basketList.querySelectorAll('.basket__quantity').forEach(qtyEl => {
      totalCount += Number(qtyEl.dataset.quantity || 1);
    });

    basketCount.textContent = totalCount;
    emptyBlock.style.display = totalCount === 0 ? 'block' : 'none';
    orderBtn.style.display = totalCount === 0 ? 'none' : 'flex';
  }

  // создание или обновление товара в корзине
  function createBasketItem(product) {
    const existingItem = basketList.querySelector(`.basket__item[data-id="${product.id}"]`);

    if (existingItem) {
      const quantityEl = existingItem.querySelector('.basket__quantity');
      let quantity = Number(quantityEl.dataset.quantity || 1);
      quantity++;
      quantityEl.dataset.quantity = quantity;
      quantityEl.textContent = `${quantity} шт.`;
    } else {

      const li = document.createElement('li');
      li.classList.add('basket__item');
      li.dataset.id = product.id;
      li.innerHTML = buildBasketItem(product, 1);

      li.querySelector('.basket__item-close').addEventListener('click', () => {
        li.remove();
        updateBasketCount();
      });

      basketList.appendChild(li);
    }

    updateBasketCount();
  }

  // обработка кликов по кнопкам добавления товара
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn.btn--icon[data-id]');
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const product = products.find(p => p.id === id);
    if (product) createBasketItem(product);
  });

  updateBasketCount();
}