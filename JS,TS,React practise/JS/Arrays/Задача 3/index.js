function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length; i++){
            if(arr[i]>arr[i+1]) {
                let temp =arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
    }
    return arr
}

const goods = ['Кофе','Арбуз','Молоко','Яблоки','Сахар','Макароны','Книга']

sort(goods)

const headingEl = document.createElement('h1')
headingEl.textContent = 'Корзина покупателя'
document.body.append(headingEl)

function renderList(arr){
    listEl.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li')
        liEl.textContent= `${i+1}) ${arr[i]}`
        listEl.append(liEl)
    }
}

const buttonEl = document.createElement('button')
buttonEl.textContent = 'Добавить товар'
document.body.append(buttonEl)

buttonEl.onclick = function () {
    const newItem = prompt('Введите название товара')
    if (newItem === "") {
        alert('Название товара не введено!')
    } else {
        goods.push(newItem)
        renderList(goods)
    }
    const result = sort(goods)
    renderList(result)
}

const listEl = document.createElement('ul')
document.body.append(listEl)

renderList(goods)
