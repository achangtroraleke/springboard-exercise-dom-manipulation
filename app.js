// Q1
let containerById = document.getElementById('container')
console.log(container)

// Q2
let containerByQuerySelector = document.querySelector("#container")
console.log(containerByQuerySelector)

// Q3
let liWithClassOfSecond = document.querySelectorAll('li.second')
console.log(liWithClassOfSecond)

// Q4
let thirdInOl = document.querySelector('ol li.third')
console.log(thirdInOl)

// Q5
let newText = document.createElement('p');
newText.textContent = 'Hello'
containerById.prepend(newText)

// Q6
let footer = document.querySelector('.footer')
footer.classList.add('main')
console.log(footer)

// Q7
footer.classList.remove('main')
console.log(footer)

// Q8
let newListElement = document.createElement('li')

// Q9
newListElement.textContent = 'four'

// Q10
let unordedList = document.querySelector('ul')
unordedList.append(newListElement)

// Q10
let orderedList = document.querySelectorAll('ol li')

for(let i=0; i<orderedList.length; i++){
    console.log(orderedList[i])
    orderedList[i].style.backgroundColor = 'green'
}

// Q11
footer.remove()