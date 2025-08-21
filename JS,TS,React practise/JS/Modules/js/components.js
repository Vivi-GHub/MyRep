export function getWrapperEl() {
    const wrapperEl = document.createElement('div')
    wrapperEl.classList.add('wrapper')
    return wrapperEl
}

export function getTopWrapperEl() {
    const topWrapperEl = document.createElement('div')
    topWrapperEl.classList.add('top-wrapper')
    return topWrapperEl
}

export function getH1El(text) {
    const h1El = document.createElement('h1')
    h1El.textContent = text
    h1El.classList.add('main-heading')
    return h1El
}

export function getButtonEl(text) {
    const buttonEl = document.createElement('button')
    buttonEl.textContent = text
    buttonEl.classList.add('button')
    return buttonEl
}

export function getTableEl() {
    const tableEl = document.createElement('table');
    const rowEl = document.createElement('tr');
    const headers = ['Название', 'Полка', 'Вес', 'Время хранения', ''];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        rowEl.append(th);
    });

    tableEl.append(rowEl);
    return tableEl;
}
 

export function getH2El(text) {
    const h2El = document.createElement('h2')
    h2El.textContent = text
    h2El.classList.add('second-heading')
    return h2El
}

export function getFormEl() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    return formEl
}

export function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("text-field")
    return inputEl
}

export function getLoaderEl () {
    const loaderEl = document.createElement('span')
    loaderEl.classList.add('loader')
    return loaderEl
}
