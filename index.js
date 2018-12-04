const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90; //adding 90 degrees is to offset the 90 degrees we added to the css transform
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds)

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);