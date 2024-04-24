function getCurrentDateTime() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Формуємо рядок з поточною датою і часом
    let currentDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    return currentDateTime;
}

// Отримуємо доступ до елементу <p> за його id
const currentDateTimeElement = document.getElementById('currentDateTime');

function updateCurrentDateTime() {
    // Отримуємо поточну дату і час
    const currentDateTime = getCurrentDateTime();

    // Встановлюємо текст елементу <p> на поточну дату і час
    currentDateTimeElement.textContent = currentDateTime;
}

// Оновлюємо поточну дату і час кожну секунду
setInterval(updateCurrentDateTime, 1000);

// Викликаємо функцію один раз при завантаженні сторінки
updateCurrentDateTime();