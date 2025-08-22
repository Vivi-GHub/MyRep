// Добавление элемента в LocalStorage
export default function addItemToLocalStorage(item) {
    const items = JSON.parse(localStorage.getItem('items')) || []
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
}
