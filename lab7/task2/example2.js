let da = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfWeek = daysOfWeek[da.getDay()];
const day = da.getDate();
const month = months[da.getMonth()];
const year = da.getFullYear();

const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

document.write(formattedDate);