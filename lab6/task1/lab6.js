function getCurrentDateTime() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let currentDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    return currentDateTime;
}

const currentDateTimeElement = document.getElementById('currentDateTime');

function updateCurrentDateTime() {
    const currentDateTime = getCurrentDateTime();
    currentDateTimeElement.textContent = currentDateTime;
}
setInterval(updateCurrentDateTime, 1000);
updateCurrentDateTime();