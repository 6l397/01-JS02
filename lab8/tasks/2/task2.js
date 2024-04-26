const container = document.getElementById('container');
const img = document.getElementById('img');
const button = document.getElementById('button');

container.addEventListener('click', () => {
    const newImg = 'https://m.media-amazon.com/images/I/71+mDoHG4mL.png';
    img.src = newImg;
    button.style.backgroundColor = 'green';
});

img.addEventListener('click', () => {
    const newImg = 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg';
    img.src = newImg;
    button.style.backgroundColor = '#446688';
});