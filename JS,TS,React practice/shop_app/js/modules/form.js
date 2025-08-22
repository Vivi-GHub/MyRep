export default function initFormValidation() {
  const form = document.querySelector('.questions__form');
  const validate = new JustValidate(form, {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: '#ff4d4f',
      fontSize: '14px',
    },
  });
  validate
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Максимум 20 символов',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Введите email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .addField('#agree', [
      {
        rule: 'required',
        errorMessage: 'Необходимо согласие',
      },
    ])
    .onSuccess(async (event) => {
      event.preventDefault();

      const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        agree: form.querySelector('#agree').checked,
      };

      try {
        const response = await fetch('https://httpbin.org/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Ошибка при отправке');

        showModal('Заявка успешно отправлена!');
        form.reset();
      } catch (error) {
        showModal('Ошибка при отправке формы. Попробуйте позже.');
      }
    });

  // Модальное окно
  const modalOverlay = document.getElementById('modal-overlay');
  const modalMessage = document.getElementById('modal-message');
  const closeBtn = modalOverlay.querySelector('.modal__close');

  function showModal(message) {
    modalMessage.textContent = message;
    modalOverlay.classList.remove('visually-hidden');
  }

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.add('visually-hidden');
  });

}