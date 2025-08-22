export default function countProducts(products) {
  const typeCounts = {};

  products.forEach(product => {
    product.type.forEach(t => {
      if (!typeCounts[t]) {
        typeCounts[t] = 0;
      }
      typeCounts[t]++;
    });
  });

  document.querySelectorAll('input[type="checkbox"][name="type"]').forEach(checkbox => {
    const type = checkbox.value;
    const count = typeCounts[type] || 0;

    const wrapper = document.querySelector(`.custom-checkbox--${type}`);
    if (!wrapper) return;

    const countSpan = wrapper.querySelector('.custom-checkbox__count');
    if (countSpan) {
      countSpan.textContent = count;
    }
  });
}