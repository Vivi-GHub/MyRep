import tableSorting, { sortDirections } from './sort.js';

// Таблица
export default async function renderTable() {
    const items = JSON.parse(localStorage.getItem('items')) || []
    const tableEl = document.querySelector('table');

    tableEl.innerHTML = ''

    const rowEl = document.createElement('tr')
    const headers = ['Название', 'Полка', 'Вес', 'Время хранения', '']
    headers.forEach(headerText => {
        const tableHeadersEl = document.createElement('th')
        tableHeadersEl.textContent = headerText
        rowEl.append(tableHeadersEl)
    })

    tableEl.append(rowEl)

    items.forEach((item, index) => {
        const row = document.createElement('tr')

        row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.shelf}</td>
                <td>${item.weight}</td>
                <td>${item.date}</td>
                <td>
                <button data-index="${index}" class="delete-btn">Удалить</button>
                </td> 
            `
        const deleteBtn = row.querySelector('.delete-btn')

        deleteBtn.addEventListener('click', async () => {
            const deleteBtn = await import('./delete-btn.js')
            deleteBtn.default(index)
        })

        tableEl.append(row)
    })

    tableSorting()
}
