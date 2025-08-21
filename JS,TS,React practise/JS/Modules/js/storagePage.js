// Создание страницы списка
export default async function createStoragePage() {
    document.body.innerHTML = ''

    const { getWrapperEl, getTopWrapperEl, getH1El, getButtonEl, getTableEl } = await import("./components.js");

    const wrapperEl = getWrapperEl()
    const topWrapperEl = getTopWrapperEl()
    const h1El = getH1El('Склад')
    const addButtonEl = getButtonEl('Добавить запись')
    const tableEl = getTableEl()

    topWrapperEl.append(h1El, addButtonEl)
    wrapperEl.append(topWrapperEl, tableEl)
    document.body.append(wrapperEl)

    addButtonEl.addEventListener('click', async() => {
        const loader = await import ('./loader.js')
        loader.showLoader()
        const addItemPage = await import ('./addItemPage.js')
        addItemPage.default()
    })

    const table = await import ('./table.js')
    table.default()
}