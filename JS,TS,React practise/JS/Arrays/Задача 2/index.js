const height = [164, 157, 160, 143, 170]

function filter(height, minHeight) {
    const result = []
    for (const item of height) {
        if (item>=minHeight) {
            result.push(item)
        }
    }
    return result
}

const headingEl = document.createElement('h1');
headingEl.textContent = 'Рост учеников'
document.body.append(headingEl)

function renderList (height) {
    listEl.innerHTML=""
    for (let i = 0; i < height.length; i++) {
        const liEl = document.createElement('li')
        liEl.textContent = `${i+1}) ${height[i]}`
        listEl.append(liEl)
    }
}

const firstBtn = document.createElement('button')
firstBtn.textContent = 'Добавить рост'
document.body.append(firstBtn)

firstBtn.onclick = function(){
    const newHeight = prompt('Введите рост ученика')
    if (newHeight==="") {
        alert('Рост не введён!')
    } else {
        height.push(newHeight)
        renderList(height)
    }
}

const secondBtn = document.createElement('button')
secondBtn.classList= 'orange'
secondBtn.textContent = 'Фильтровать'
document.body.append(secondBtn)

secondBtn.onclick = function () {
    const minHeight = prompt('Введите минимальный рост')

    const result = filter (height, minHeight)
    
    renderList(result)
}

const listEl = document.createElement('ul');
document.body.append(listEl)

renderList(height)