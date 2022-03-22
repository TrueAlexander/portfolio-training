const timerBlock = document.querySelector('.timer__time')
const deadLine = '31 march 2022'
let interval

const updateClock = () => {
  const date = new Date().getTime()
  const dateDeadline = new Date(deadLine).getTime()

  timeRemaining = (dateDeadline - date) / 1000

  const days = Math.floor(timeRemaining / 60 / 60 / 24)
  const hours = Math.floor((timeRemaining / 60 / 60) % 24)
  const minutes = Math.floor((timeRemaining / 60) % 60)
  const seconds = Math.floor(timeRemaining % 60)

  const fDays = days
  const fHours = hours < 10 ? '0' + hours : hours
  const fMinutes = minutes < 10 ? '0' + minutes : minutes
  const fSeconds = seconds < 10 ? '0' + seconds : seconds

  const daysString = days.toString()

  let daysSpelling

  if (daysString[daysString.length-1] == 1) {
    daysSpelling = ' день'
  } else if (daysString[daysString.length-1] < 5 && daysString[daysString.length-1] > 1) {
    daysSpelling = ' дня'
  } else {
    daysSpelling = ' дней'
  }

  timerBlock.textContent = `${fDays} ${daysSpelling} ${fHours}:${fMinutes}:${fSeconds}`

  if (timeRemaining <= 0) {
    clearInterval(interval)
    timerBlock.textContent = `0 дней 00:00:00`
  }
}

interval = setInterval(updateClock, 500)





