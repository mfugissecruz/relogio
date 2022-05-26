const hoursHand = document.querySelector('.hand.hours')
const minutesHand = document.querySelector('.hand.minutes')
const secondsHand = document.querySelector('.hand.seconds')
const digitalClock = document.querySelector('#digitalClock')
const date = document.querySelector('#date')


const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360)
}

const setClock = _ =>{
    const currentDate = new Date();

    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()

    const seconds = currentDate.getSeconds()
    const minutes = currentDate.getMinutes()
    const hours = currentDate.getHours()
    
    const secondsPercentage = currentDate.getSeconds() / 60
    const minutesPercentage = currentDate.getMinutes() / 60
    const hoursPercentage = currentDate.getHours() / 12
    
    date.textContent = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}`: month}/${year}`
    digitalClock.textContent= `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`
    
    setRotation(hoursHand, hoursPercentage)
    setRotation(minutesHand, minutesPercentage)
    setRotation(secondsHand, secondsPercentage)
}

setInterval(() => {
    setClock() 
}, 1000);