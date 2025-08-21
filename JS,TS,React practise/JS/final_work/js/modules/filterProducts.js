import renderCards from './renderAndPagination.js';

// фильтрация по типам товаров и сортировка по цене и рейтингу
export default function filterProducts(products) {
    const sortSelect = document.querySelector('.catalog__sort-select');
    const form = document.querySelector('.catalog-form');

    const typeCounts = {
        pendant: 0,
        ceiling: 0,
        overhead: 0,
        point: 0,
        nightlights: 0,
    };

    products.forEach(product => {
        product.type.forEach(type => {
                typeCounts[type]++;
        });
    });

    for (const type in typeCounts) {
        const count = typeCounts[type];
        const countEl = document.querySelector(`.custom-checkbox--${type} .custom-checkbox__count`);
        if (countEl) {
            countEl.textContent = count;
        }
    }

    sortSelect.addEventListener('change', sortAndRenderProducts);
    form.addEventListener('change', sortAndRenderProducts);

    sortAndRenderProducts();

    async function sortAndRenderProducts() {
        const sortValue = sortSelect.value;

        const checkedTypes = Array.from(form.querySelectorAll('input[name="type"]:checked'))
            .map(input => input.value);

        const statusInput = form.querySelector('input[name="status"]:checked');
        const statusValue = statusInput ? statusInput.value : null;

        let filtered = products.filter(product => {
            const availableSum = product.availability.moscow + product.availability.orenburg + product.availability.saintPetersburg;

            if (statusValue === 'instock' && availableSum === 0) return false;

            if (checkedTypes.length > 0 && !checkedTypes.some(type => product.type.includes(type))) return false;

            return true;
        });

        if (sortValue === 'price-min') {
            filtered.sort((a, b) => a.price.new - b.price.new);
        } else if (sortValue === 'price-max') {
            filtered.sort((a, b) => b.price.new - a.price.new);
        } else if (sortValue === 'rating-max') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        renderCards(filtered)
    }
}