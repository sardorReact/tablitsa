window.addEventListener('DOMContentLoaded', () => {
    const btnX = document.querySelector('.btnX'),
        title = document.querySelector('#title'),
        sum = document.querySelector('#author'),
        value_container = document.querySelector('.value-container'),
        book = document.querySelector('#book-list')

        
    let count = 1
    let full = 0
    btnX.addEventListener('click', (e) => {
        e.preventDefault()
        if (title.value == '' || sum.value == '') {
            alert('enter your changes')
        }else {
            const newRow = document.createElement('tr')

            const newNum = document.createElement('th')
            newNum.innerHTML = count++
            newRow.appendChild(newNum)  

            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            const newCar = document.createElement('th')
            newCar.innerHTML = sum.value
            newRow.appendChild(newCar)                
            
            const new_count = document.createElement("div")
            full += Number(sum.value)
            value_container.innerHTML = full
            value_container.appendChild(new_count)

            book.appendChild(newRow)
            
        }

        title.value = ''
        sum.value = ''
    })
    
})