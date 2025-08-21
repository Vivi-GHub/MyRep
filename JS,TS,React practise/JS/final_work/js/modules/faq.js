export default function showAndCloseFaq() {
    const faqButtons = document.querySelectorAll('.accordion__btn');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            faqButtons.forEach(otherBtn => {
                if (otherBtn !== btn && otherBtn.classList.contains('accordion__btn--active')) {
                    otherBtn.classList.remove('accordion__btn--active')
                }
                const siblingOtherBtn = otherBtn.nextElementSibling
                siblingOtherBtn.style.display = 'none'
            })

            const isActive = btn.classList.toggle('accordion__btn--active')

            const siblingBtn = btn.nextElementSibling
            if (isActive) {
                siblingBtn.style.display = 'block';
            } else {
                siblingBtn.style.display = 'none'
            }
        })
    })
}