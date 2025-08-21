// Создание страницы добавления записи
export default async function createAddItemPage() {
    document.body.innerHTML = ''

    const { getWrapperEl, getH2El, getFormEl, getInputEl,getButtonEl} = await import("./components.js");

    const wrapperEl = getWrapperEl()
    const h2El = getH2El('Добавить запись')
    const formEl = getFormEl()
    const nameInputEl = getInputEl('text', 'name', 'Название')
    const shelfInputEl = getInputEl('text', 'shelf', 'Полка')
    const weightInputEl = getInputEl('text', 'weight', 'Вес')
    const dateInputEl = getInputEl('date', 'date', 'Время хранения')
    const addButtonEl = getButtonEl('Добавить запись')

    formEl.append(nameInputEl, shelfInputEl, weightInputEl, dateInputEl, addButtonEl)
    wrapperEl.append(h2El, formEl)
    document.body.append(wrapperEl)

    formEl.addEventListener('submit', async (e) => {
        e.preventDefault()
        const loader = await import ('./loader.js')
        loader.showLoader()
        const inputs = [nameInputEl, shelfInputEl, weightInputEl, dateInputEl]
        let valid = true

        inputs.forEach(input => {
            input.addEventListener('input', () => input.setCustomValidity(''))

            if (!input.value) {
                input.setCustomValidity('Заполните поле')
                valid = false
            }
        })
        if (!valid) {
            formEl.reportValidity()
            return
        }

        const newItem = {
            name: nameInputEl.value,
            shelf: shelfInputEl.value,
            weight: weightInputEl.value,
            date: dateInputEl.value
        }
        
        const itemToLocalStorage = await import('./LocalStorage.js')
        itemToLocalStorage.default(newItem)

        const storagePage = await import('./storagePage.js')
        storagePage.default()
        
    })
}