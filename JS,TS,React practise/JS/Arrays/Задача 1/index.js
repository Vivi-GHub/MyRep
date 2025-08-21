function find (arr,search) {
    let result=-1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i
            break
        }
    }
    return result
}

const headingEl = document.createElement('h1')
headingEl.textContent = 'Домашняя библиотека'
document.body.append(headingEl)

const books= ['Мастер и Маргарита','Гарри Поттер','За пропастью во ржи','Властелин колец','Дюна']

function renderList (arr) {
    listEl.innerHTML=""
    for (let i= 0; i < arr.length; i++) {
        const liEl = document.createElement('li')
        liEl.textContent = `${i+1}) ${arr[i]}`
        listEl.append(liEl)
    }
}

const firstBtn = document.createElement('button')
firstBtn.textContent = 'Добавить книгу'
document.body.append(firstBtn)

firstBtn.onclick = function(){
    const newBook = prompt('Введите название книги')
    if (newBook === "") {
        alert('Название книги не введено!')
    } else {
        books.push(newBook)
        renderList(books)
    }
}

const secondBtn = document.createElement('button')
secondBtn.classList= 'blue'
secondBtn.textContent = 'Найти'
document.body.append(secondBtn)

secondBtn.onclick = function () {
    const search = prompt('Введите название книги для поиска')

    const findIndex = find(books, search)

    if(findIndex>-1) {
        document.querySelector(`li:nth-child(${findIndex+1})`).style.backgroundColor = "yellow"
    } else {
        alert('Книга не найдена!')
    }
}

const listEl = document.createElement('ul')
document.body.append(listEl)

renderList(books)
