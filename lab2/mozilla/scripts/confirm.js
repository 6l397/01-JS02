var r = confirm("Готові гризти граніт науки?");
if (r == true) {
    myTxt.innerHTML = "ВПЕРЕД ДО ЗНАНЬ!";
} else {
 	   myTxt.innerHTML = "Мені дуже сумно!";
}
var myImage = document.querySelector('img');
var j = 0;
myImage.onclick = function () {
    j++;
 	   var mySrc =  myImage.getAttribute('src');
 	   if (mySrc === 'https://cdn0.iconfinder.com/data/icons/mozilla-icons/256/firefox_png.png') {
 	       myImage.setAttribute ('src', 'https://static-00.iconduck.com/assets.00/firefox-icon-1981x2048-4izjijq3.png');
 	   } else {
 	       myImage.setAttribute ('src', 'https://cdn0.iconfinder.com/data/icons/mozilla-icons/256/firefox_png.png');
  	  }
  	  if (j == 3) {
  	      myImage.remove();
   	     document.write("<h1>Вітаю!</h1><h2>Завдання виконано!</h2>");
  	  }
}
myTxt.innerHTML += "<br>" + "  Клацніть мишею по емблемі FireFox!";
