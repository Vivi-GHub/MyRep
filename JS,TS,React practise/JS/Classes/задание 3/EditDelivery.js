import Delivery from './Delivery.js'

export default class EditDelivery extends Delivery {
    constructor(name = 'Не указано', address = 'Не указан', distance = 0) {
        super(name, address, distance)
        this._status = 'delivery'
    }

    get status() {
        return this._status
    }

    set status(newStatus) {
        this._status = newStatus
        this.updateCard()
    }

    getEditButtonEl() {
        this.buttonEl = document.createElement('button')
        this.buttonEl.classList = 'card__button'
        this.buttonEl.textContent = 'Изменить'
        this.buttonEl.type = 'button'

        this.cardEl.append(this.buttonEl)

        this.buttonEl.addEventListener('click', () => {
            this.showEditForm()
        })

        return this.buttonEl
    }

    showEditForm() {

        if (document.querySelector('.form')) return

        this.overlayEl = document.createElement('div')
        this.overlayEl.classList.add('overlay')
        document.body.appendChild(this.overlayEl)

        this.formEl = document.createElement('form')
        this.formEl.classList = 'form'

        this.fieldsWrapperEl = document.createElement('fieldset')
        this.fieldsTitleEl = document.createElement('legend')
        this.fieldsTitleEl.textContent = 'Изменить'

        this.nameInput = document.createElement('input')
        this.nameInput.classList = 'form__name-input'
        this.nameInput.type = 'text'
        this.nameInput.value = this.name

        this.addressInput = document.createElement('input')
        this.addressInput.classList = 'form__address-input'
        this.addressInput.type = 'text'
        this.addressInput.value = this.address

        this.distanceInput = document.createElement('input')
        this.distanceInput.classList = 'form__distance-input'
        this.distanceInput.type = 'number'
        this.distanceInput.min = 0
        this.distanceInput.value = this.distance

        this.statusSelect = document.createElement('select')
        this.statusSelect.classList = 'form__select-status'

        this.options = [
            { value: 'delivery', text: 'Доставляется' },
            { value: 'delivered', text: 'Доставлен' },
            { value: 'canceled', text: 'Отменён' }
        ]

        this.options.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            this.statusSelect.appendChild(optionEl);
        })

        this.saveButtonEl = document.createElement('button')
        this.saveButtonEl.classList = 'form__button'
        this.saveButtonEl.type = 'submit'
        this.saveButtonEl.textContent = 'Сохранить'

        this.closeButtonEl = document.createElement('button')
        this.closeButtonEl.classList = 'form__close-button'
        this.closeButtonEl.type = 'button'

        this.closeIconSpan = document.createElement('span')
        this.closeIconSpan.className = 'close-icon'
        this.closeIconSpan.innerHTML = '&times;'

        this.closeButtonEl.addEventListener('click', () => {
            this.formEl.remove()
            this.overlayEl.remove()
        })

        this.closeButtonEl.appendChild(this.closeIconSpan)

        this.fieldsWrapperEl.append(this.fieldsTitleEl, this.nameInput, this.addressInput, this.distanceInput, this.statusSelect)

        this.formEl.append(this.closeButtonEl, this.fieldsWrapperEl, this.saveButtonEl)

        document.querySelector('.app').append(this.formEl);

        this.formEl.addEventListener('submit', (e) => {
            e.preventDefault()

            this.saveNewData()
        })
    }

    saveNewData() {
        this.name = this.nameInput.value
        this.address = this.addressInput.value
        this.distance = this.distanceInput.value
        this.status = this.statusSelect.value

        this.formEl.remove()
        this.overlayEl.remove()

        this.updateCard()

    }

    updateCard() {
        if (this.nameEl) {
            this.nameEl.textContent = this.name
        }
        if (this.addressEl) {
            this.addressEl.textContent = this.address
        }
        if (this.distanceEl) {
            this.distanceEl.textContent = `${this.distance} км`
        }

        this.cardEl.classList.remove('card--delivered', 'card--canceled');

        if (this.status === 'delivered') {
            this.cardEl.classList.add('card--delivered');
        } else if (this.status === 'canceled') {
            this.cardEl.classList.add('card--canceled');
        }
    }

    static getTotalDistance(deliveries) {
        return deliveries.filter(delivery => delivery.status !== 'canceled').reduce((sum, delivery) => sum + parseFloat(delivery.distance), 0);
    }
}