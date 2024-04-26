const row2 = document.getElementById('row2'); 
const row3 = document.getElementById('row3'); 
const row4 = document.getElementById('row4');

let isRow2Active = false;

function handleMouseDown(event) { 
    if (event.target === row2) {
         row2.style.fontSize = '48pt'; 
         row2.style.color = 'white'; 
         document.body.style.backgroundColor = '#C8C9F2'; 
         isRow2Active = true; 
    } else if (event.target === row3) {
        row3.style.backgroundColor = 'green'; 
    } else if (event.target === row4) { 
        row4.style.backgroundColor = 'red'; } 
    }

function handleMouseUp(event) { 
    if (event.target === row3) { 
        row3.style.backgroundColor = 'yellow'; 
    } else if (event.target === row4) { 
        row4.style.backgroundColor = '#C8C9F2'; 
    } if (event.target === row2) { 
        if (isRow2Active) {
             row2.style.fontSize = '24pt'; 
             row2.style.color = 'black'; 
             document.body.style.backgroundColor = 'white'; 
             isRow2Active = false; } } 
            }

function handleMouseMove(event) { 
    if (event.target === row4) { 
        row4.style.backgroundColor = 'red'; 
    } else { 
        row4.style.backgroundColor = '#C8C9F2'; } 
    }

function handleMouseLeave(event) { 
    if (event.target === row2 && isRow2Active) { 
        row2.style.fontSize = '24pt'; 
        row2.style.color = 'black'; 
        document.body.style.backgroundColor = 'white'; 
        isRow2Active = false; } 
    }

document.addEventListener('mousedown', handleMouseDown); 
document.addEventListener('mouseup', handleMouseUp); 
document.addEventListener('mousemove', handleMouseMove); 
document.addEventListener('mouseleave', handleMouseLeave);