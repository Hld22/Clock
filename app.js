const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')
const image_input = document.getElementById('image-input')
const clock = document.getElementById('clock')
var uploaded_image = "";

function getTime() {
    const now= new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6
//    console.log(seconds)
    secondsHand.style.transform = 'rotate('+ (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate('+ (minutes * timeInterval + seconds / 10) + 'deg)'
    hoursHand.style.transform = 'rotate('+ (hours * 30 + minutes / 2) + 'deg)'

    if (
        (hours == 12 && minutes >= 33) ||
        (hours == 13 && minutes <= 15)) {
        clock.style.backgroundImage = 'url("LernzeitUhr.png")';
    } else {
        clock.style.backgroundImage = '';
    }
}
setInterval(getTime, 500)
getTime()