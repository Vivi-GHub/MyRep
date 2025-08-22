// Сортировка
   export const sortDirections = {
        name: true, 
        shelf: true,
        weight: true,
        date: true
    }

export default function tableSorting() {


    const tableHeaders = document.querySelectorAll('th');
    tableHeaders.forEach((header, index) => {
        if (index == tableHeaders.length - 1) return

        header.addEventListener('click', async () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            const key = ['name', 'shelf', 'weight', 'date', 'action'];
            const sortKey = key[index];

            const increase = sortDirections[sortKey]

            items.sort((a, b) => {
                if (sortKey === 'weight') {
                    return parseFloat(a[sortKey]) - parseFloat(b[sortKey]);
                } else if (sortKey === 'date') {
                    return new Date(a[sortKey]) - new Date(b[sortKey]);
                } else {
                    return a[sortKey].localeCompare(b[sortKey]);
                }
            })

            if (!increase) {
                items.reverse()
            }

            sortDirections[sortKey] = !increase;

            localStorage.setItem('items', JSON.stringify(items))

            const table = await import ('./table.js')
            table.default()
        })
    })
}