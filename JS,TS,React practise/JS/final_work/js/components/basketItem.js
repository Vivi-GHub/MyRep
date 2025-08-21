export default function buildBasketItem(product, quantity = 1) {
  return `
    <div class="basket__img">
      <img src="${product.image}" alt="${product.name}" width="60" height="60">
    </div>
    <span class="basket__name">${product.name}</span>
    <span class="basket__price">${product.price.new.toLocaleString('ru-RU')} ₽</span>
    <span class="basket__quantity" data-quantity="${quantity}">${quantity} шт.</span>
    <button class="basket__item-close" type="button" aria-label="Удалить из корзины">
      <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-close"></use>
      </svg>
    </button>
  `;
}