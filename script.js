// Music Controls
function toggleMute() {
    const music = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');

    if (music.muted) {
        music.muted = false; // Unmute music
        muteButton.innerHTML = 'Mute Music <i class="fas fa-volume-mute"></i>';
    } else {
        music.muted = true; // Mute music
        muteButton.innerHTML = 'Play Music <i class="fas fa-volume-up"></i>';
    }
}

// Disable Right Click
function disableRightClick() {
    alert("Right-click is disabled to protect content.");
    return false;
}

// Countdown Timer
window.onload = function () {
    // Start the countdown timer when the window loads
    countUpFromTime("Jan 24, 2023 21:15:00", 'countup1'); // Change the date and time here to your preferred start time.
};

function countUpFromTime(countFrom, id) {
    // Get the time to count from
    const countFromDate = new Date(countFrom);

    function updateCountUp() {
        // Calculate the current time difference
        const now = new Date();
        let years = now.getFullYear() - countFromDate.getFullYear();
        
        // Adjust if the current date is before the "count from" date in the current year
        let currentYearCountFromDate = new Date(countFromDate);
        currentYearCountFromDate.setFullYear(now.getFullYear());

        if (now < currentYearCountFromDate) {
            years -= 1;
            currentYearCountFromDate.setFullYear(now.getFullYear() - 1);
        }

        // Calculate the remaining difference
        const timeDifference = now - currentYearCountFromDate;

        // Constants for time calculations
        const msInOneDay = 24 * 60 * 60 * 1000;
        const msInOneHour = 60 * 60 * 1000;
        const msInOneMinute = 60 * 1000;
        const msInOneSecond = 1000;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / msInOneDay);
        const hours = Math.floor((timeDifference % msInOneDay) / msInOneHour);
        const mins = Math.floor((timeDifference % msInOneHour) / msInOneMinute);
        const secs = Math.floor((timeDifference % msInOneMinute) / msInOneSecond);

        // Display the calculated time in the respective HTML element
        const countupEl = document.getElementById(id);
        if (countupEl) {
            countupEl.querySelector('.years').innerHTML = padNumber(years);
            countupEl.querySelector('.days').innerHTML = padNumber(days);
            countupEl.querySelector('.hours').innerHTML = padNumber(hours);
            countupEl.querySelector('.minutes').innerHTML = padNumber(mins);
            countupEl.querySelector('.seconds').innerHTML = padNumber(secs);
        }
    }

    // Update the count every 1 second
    setInterval(updateCountUp, 1000);
}

// Function to pad numbers for consistent display
function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Fade-in effect for the heartfelt message
document.addEventListener("DOMContentLoaded", () => {
    const heartfeltMessage = document.querySelector('.heartfelt-message');
    if (heartfeltMessage) {
        heartfeltMessage.style.opacity = 0;
        window.setTimeout(() => {
            heartfeltMessage.style.transition = "opacity 3s";
            heartfeltMessage.style.opacity = 1;
        }, 500);
    }
});

// Prevent text selection to protect content
document.addEventListener('selectstart', function (e) {
    alert("Text selection is disabled to protect content.");
    e.preventDefault();
});
