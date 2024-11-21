document.addEventListener('DOMContentLoaded', () => {

const inputArea = document.querySelector('.inputArea')
const afterCal = document.querySelector('.afterCal')
const time = document.querySelector('.time')
const calcDate = document.querySelector('.calcDate')

calcDate.addEventListener('click', () => {
    const today = new Date()
    // today.setHours(0, 0, 0, 0)

    const userInput = document.querySelector('#userInput').value
    const userInputDate = new Date(userInput)
    // userInputDate.setHours(0, 0, 0, 0)

    if(!userInput || isNaN(userInputDate)){
        time.textContent = 'Invalid Input'
        return
    }

    let currentYear = today.getFullYear()

    userInputDate.setFullYear(currentYear)

    if(userInputDate < today){
        userInputDate.setFullYear(currentYear + 1)
    }

    inputArea.style.display = 'none'
    calcDate.style.display = 'none'
    afterCal.style.display = 'block'
    afterCal.style.display = 'flex'

    updateCountdown(userInputDate)

    const countDown = setInterval(() => {
        const now = new Date()
        const diffMillis = userInputDate - now

        if(diffMillis <= 0){
            clearInterval(countDown)
            time.textContent = 'Happy Birthday'
            return
        }

        updateCountdown(userInputDate)

       
    }, 1000)

})

function updateCountdown(userInputDate){
    const now = new Date()
    const diffMillis = userInputDate - now

    if(diffMillis <= 0){
        time.textContent = 'Happy Birthday'
        return
    }

    const days = Math.floor(diffMillis / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diffMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mins = Math.floor((diffMillis % (1000 * 60 * 60)) / (1000 * 60))
    const sec = Math.floor((diffMillis % (1000 * 60)) / 1000)

    time.textContent = `${days} Days ${hours} Hours ${mins} Minutes ${sec} Seconds`
}

})