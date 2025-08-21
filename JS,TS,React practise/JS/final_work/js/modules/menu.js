
// Показывает меню каталога 
export function showCatalogMenu() {
  const btnCatalogMenuEl = document.querySelector('.header__catalog-btn')

  btnCatalogMenuEl.addEventListener('click', () => {
    const catalogMenuEl = document.querySelector('.main-menu')
    catalogMenuEl.classList.add('main-menu--active')
  })
}

// Закрывает меню каталога
export function closeCatalogMenu() {
  const btnCatalogMenuEl = document.querySelector('.main-menu__close')

  btnCatalogMenuEl.addEventListener('click', () => {
    const catalogMenuEl = document.querySelector('.main-menu')
    catalogMenuEl.classList.remove('main-menu--active')
  })
}

// Меню выбора города
export function selectCity() {
  const locationEl = document.querySelector('.header__location.location');
  const btnCity = locationEl.querySelector('.location__city');
  const cityNameEl = btnCity.querySelector('.location__city-name');
  const sublistEl = locationEl.querySelector('.location__sublist');

  btnCity.addEventListener('click', () => {
    btnCity.classList.toggle('location__city--active');
  });

  const cityButtons = sublistEl.querySelectorAll('.location__sublink');
  cityButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      cityNameEl.textContent = btn.textContent;

      btnCity.classList.remove('location__city--active');
    });
  });
}