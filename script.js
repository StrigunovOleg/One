

let w =screen.width;
let h =screen.height;
console.log(h);
console.log(w);

   var html = '<div id="wrapper">';
   html += '<img width="740" height="560" src="home.png" alt="Дом">';
   html += '<div class="pin pin-down" data-xpos="170" data-ypos="60"><h2>Конструкция крыши</h2></div>';
   html += '<div class="pin pin-down" data-xpos="600" data-ypos="100"><h2>Конструкция фронтона</h2></div>';
   html += '<div class="pin pin-down" data-xpos="450" data-ypos="110"><h2>Конструкция чердачного перекрытия</h2></div>';
   html += '<div class="pin" data-xpos="450" data-ypos="240"><h2>Конструкция перегородок</h2></div>';
   html += '<div class="pin pin-down" data-xpos="600" data-ypos="250"><h2>Конструкция внешних стен</h2></div>';
   html += '<div class="pin pin-down" data-xpos="600" data-ypos="250"><h2>Конструкция внешних стен</h2></div>';
   html += '<div class="pin pin-down" data-xpos="400" data-ypos="350"><h2>Конструкция пола</h2></div>';
   html += '</div>';



   let element = document.getElementById('result');
   element.innerHTML = html;


   // <div id="wrapper">
   // <img width="740" height="560" src="home.png" alt="Дом">
   // <div class="pin pin-down" data-xpos="170" data-ypos="60"><h2>Конструкция крыши</h2></div>
   // <div class="pin pin-down" data-xpos="600" data-ypos="100"><h2>Конструкция фронтона</h2></div>
   // <div class="pin pin-down" data-xpos="450" data-ypos="110"><h2>Конструкция чердачного перекрытия</h2></div>
   // <div class="pin" data-xpos="450" data-ypos="240"><h2>Конструкция перегородок</h2></div>
   // <div class="pin pin-down" data-xpos="600" data-ypos="250"><h2>Конструкция внешних стен</h2></div>
   // <div class="pin pin-down" data-xpos="400" data-ypos="350"><h2>Конструкция пола</h2></div>
   // </div>
