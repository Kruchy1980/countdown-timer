// I. VARIABLES
// I.1 General
// 1.Settings window
const settings = document.querySelector('.settings');
// 2.Settings Toggle Button
const settingsBtn = document.querySelector('.settings-btn');
// 3. Image section
const imageSection = document.querySelector('.image-section');
// 4. Event title
const eventNameDisplay = document.querySelector('.event');

// I.2 Inputs and save button
// 5. Event Name
const eventNameInput = document.querySelector('#event-name');
// 6. Settings Event-day input
const eventDayInput = document.querySelector('#event-day');
// 7. Settings Event-month input
const eventMonthInput = document.querySelector('#event-month');
// 8. Settings Event-year input
const eventYearInput = document.querySelector('#event-year');
// 9. Settings event image link
const eventImageInput = document.querySelector('#event-image');
// 10. Save button
const saveBtn = document.querySelector('.save');

// I.3 Time displays
// 11. App days display counter
const daysCount = document.querySelector('.days-count');
// 12. App hours display counter
const hoursCount = document.querySelector('.hours-count');
// 13. App minutes display counter
const minutesCount = document.querySelector('.minutes-count');
// 14. App seconds display counter
const secondsCount = document.querySelector('.seconds-count');

// I.4 The time cards titles - changeable dependently of the singular or plural counters counters 
// 15. App days display title
const daysTitle = document.querySelector('.days');
// 16. App hours display title
const hoursTitle = document.querySelector('.hours');
// 17. App minutes display title
const minutesTitle = document.querySelector('.minutes');
// 18. App seconds display title
const secondsTitle = document.querySelector('.seconds');

// I.5 Others
let usersTime;

// II. FUNCTIONS
// 1. Toggling and clearing the settings window;
const toggleAndClear = () => {
    settings.classList.toggle('active');
    // Open the Settings with empty fields
    // clearSettings();
};

// 2. Save and update data
const saveAndUpdateData = () => {
    // 1. Set the event name
    eventNameDisplay.textContent = eventNameInput.value;
    // 2. Set date use the additional variable
    usersTime = new Date(`${eventMonthInput.value} ${eventDayInput.value} ${eventYearInput.value}`);
    // console.log(usersTime);
    // 3. Set the counter update every 1s
    const setTimer = setInterval(setCounter, 1000);
    // 3. Image  link update
    imageSection.style.backgroundImage = `url('${eventImageInput.value}')`;
};


// III. HELPING FUNCTIONS
// 1. Clear settings - not necessary if we would like to have the function working from the page loading 
// const clearSettings = () => {
//     eventNameInput.value = '';
//     eventDayInput.value = '';
//     eventMonthInput.value = '';
//     eventYearInput.value = '';
// };

// 2. Calculate time method
const setCounter = () => {
    // 1. Get the users Time check 
    // console.log(usersTime, usersTime.getTime(), typeof usersTime.getTime(), typeof new Date().getTime());
    // 2. Set the result of calculate the difference time between present and user time
    let currentDate = new Date().getTime();
    // 3.Calculate the difference between the dates
    let calculatedTime = usersTime.getTime() - currentDate;
    // console.log(calculatedTime);
    // 4. Calculate seconds minutes hours and days to date
    // 4.a) DAYS 24*60*60*1000 = 1
    let days = Math.floor((calculatedTime / (24 * 60 * 60 * 1000)));
    // console.log(days);
    // 4.b) HOURS 60*60*1000 = 1
    let hours = Math.floor(((calculatedTime / (24 * 60 * 60 * 1000)) % 24));
    // console.log(hours);
    // 4.c) MINUTES 60*1000 = 1
    let minutes = Math.floor((calculatedTime / (60 * 1000)) % 60);
    // console.log(minutes);
    // 4.d) SECONDS 1000 = 1
    let seconds = Math.floor((calculatedTime / 1000) % 60);
    // console.log(seconds);
    // Set the values in specified places
    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
    // Condition which sets the counters name adequate to 1 or !1 values
    days === 1 ? daysTitle.textContent = 'Day' : daysTitle.textContent = 'Days';
    hours === 1 ? hoursTitle.textContent = 'Hour' : hoursTitle.textContent = 'Hours';
    minutes === 1 ? minutesTitle.textContent = 'Minute' : minutesTitle.textContent = 'Minutes';
    seconds === 1 ? secondsTitle.textContent = 'Second' : secondsTitle.textContent = 'Seconds';
};

// IV. EVENT LISTENERS
// 1. Toggling the settings
settingsBtn.addEventListener('click', toggleAndClear);
// 2. Save and update the countdown 
saveBtn.addEventListener('click', saveAndUpdateData);
// 3. Create  listener which starts the function immediately after going to the page
window.addEventListener('load', saveAndUpdateData);