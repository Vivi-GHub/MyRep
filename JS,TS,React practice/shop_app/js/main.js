window.addEventListener('DOMContentLoaded', async () => {
    const getCards = await import('./modules/getCards.js');
    const products = await getCards.default();

    //Меню
    const menu = await import('./modules/menu.js');
    menu.showCatalogMenu();
    menu.closeCatalogMenu();
    menu.selectCity();

    //Фильтрация и сортировка
    const filterProducts = await import('./modules/filterProducts.js');
    filterProducts.default(products);

    //Подсчёт товаров по типам
    const countProducts = await import('./modules/countProducts.js');
    countProducts.default(products);

    //Корзина
    const basket = await import('./modules/basket.js');
    basket.default(products);

    //Товары дня
    const daySlider = await import('./modules/slider.js');
    daySlider.default(products);

    //FAQ
    const faq = await import('./modules/faq.js');
    faq.default();

    //Валидация формы
    const formValidation = await import('./modules/form.js');
    formValidation.default();

});