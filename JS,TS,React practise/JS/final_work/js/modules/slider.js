import buildProductCard from '../components/productCard.js';

export default async function initDayProductsSlider(products) {
  const dayProducts = products.filter(p => p.goodsOfDay === true);
  const sliderList = document.querySelector('.day-products__list');

  sliderList.innerHTML = '';

  dayProducts.forEach(product => {
    const li = document.createElement('li');
    li.classList.add('day-products__item', 'swiper-slide');
    li.innerHTML = buildProductCard(product);
    sliderList.appendChild(li);
  });

  new Swiper('.day-products__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.day-products__navigation-btn--next',
      prevEl: '.day-products__navigation-btn--prev'
    }
  });
}