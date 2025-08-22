// Кнопка удаления
export default async function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || []
    items.splice(index, 1)
    localStorage.setItem('items', JSON.stringify(items))
    
    const table = await import ('./table.js')
    table.default()
}