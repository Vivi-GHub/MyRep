export default class Delivery {
    constructor(name = 'Не указано', address = 'Не указан', distance = 0) {
        this.name = name;
        this.address = address;
        this.distance = distance;
    }

    get name() {
        return this._name;
    }

    set name(text) {
        if (text) {
            this._name = text[0].toUpperCase() + text.slice(1).toLowerCase()
        } else {
            this._name = text
        }
    }

    get address() {
        return this._address;
    }

    set address(text) {
        this._address = text;

    }

    get distance() {
        return this._distance;
    }

    set distance(text) {
        this._distance = text;
    }

    createWrapper(heading, text) {
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'card__wrapper';

        this.heading = document.createElement('h2');
        this.heading.className = 'card__heading';
        this.heading.textContent = heading;

        this.span = document.createElement('span');
        this.span.className = 'card__text';
        this.span.textContent = text;

        this.wrapper.append(this.heading, this.span);
        return this.wrapper;
    }

    createCard() {
        this.cardEl = document.createElement('div');
        this.cardEl.className = 'card';

        this.cardEl.append(
            this.createWrapper('Имя', this.name),
            this.createWrapper('Адрес', this.address),
            this.createWrapper('Расстояние', this.distance + ' км')
        );

        document.querySelector('.app').append(this.cardEl);
    }
}