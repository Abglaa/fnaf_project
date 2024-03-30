//PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

// Tab slider

const tabContentBLocks = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const parentTabs = document.querySelector('.tab_content_items')

let currentTab = 0

const hideTabContent = () => {
    tabContentBLocks.forEach((tabContentBlock) => {
        tabContentBlock.style.display = 'none'
    })
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {
    tabContentBLocks[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}
parentTabs.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

const autoTabContentSlide = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBLocks.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoTabContentSlide()
hideTabContent()
showTabContent()


//CONVERTOR

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const fetchData = async () => {
    const response = await fetch('../data/convertor.json')
    const data = await response.json()
    return data
}

const convertor = async (element, targetElement, current) => {
    element.oninput = async () => {
        try {
            const response = await fetchData()
            if (current === 'som') {
                targetElement.value = (element.value / response.usd).toFixed(2)
                eurInput.value = (element.value / response.eur).toFixed(2)
            } else if (current === 'usd') {
                targetElement.value = (element.value * response.usd).toFixed(2)
                eurInput.value = (element.value * response.usd / response.eur).toFixed(2)
            } else if (current === 'eur') {
                targetElement.value = (element.value * response.eur).toFixed(2)
                usdInput.value = (element.value * response.eur / response.usd).toFixed(2)
            }
            if (element.value === '' || targetElement.value === '0') {
                eurInput.value = '';
                usdInput.value = '';
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
}

convertor(somInput, usdInput, 'som')
convertor(usdInput, somInput, 'usd')
convertor(eurInput, somInput, 'eur')


//Sweatet

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let count = 1

const switcher = async () => {
    try{
        const response = await (`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    }catch (e){
        console.log(e)
    }
}
switcher();


let next = () => {
    count = (count === 200) ? 1 : count + 1
    switcher()
}
let prev = () => {
    count = (count === 200) ? 1 : count - 1
    switcher()
}
btnNext.onclick = next
btnPrev.onclick = prev


//WEATHER SEARCH
const searchInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const URL = 'http://api.openweathermap.org/data/2.5/weather'


const citySearch = () => {
    searchInput.oninput = async (event) => {
        try {
            const response = await fetch(`${URL}?q=${event.target.value}&appid=${API_KEY}`)
            const data = await response.json()
            city.innerHTML = data.name ? data.name : 'Город не найден...'
            temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
        } catch (e) {
            console.log(e)
        }
    }
}
citySearch()
