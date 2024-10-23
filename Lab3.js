function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>';

    textDiv.innerHTML += '<p>Мета:придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих'+ 
    'елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок '+
    '⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>';

    const links = [
        { url: 'https://github.com/AnichkaT/IC-34_Course_Tverdokhlib.git', text: 'Посилання на репозиторій веб застосунку  ' },
        { url: 'https://anichkat.github.io/IC-34_Course_Tverdokhlib/', text: 'Посилання на живу сторінку веб застосунку  ' },
        { url: 'https://github.com/AnichkaT/zvit.git', text: 'Посилання на репозиторій звіту  ' },
        { url: 'https://anichkat.github.io/zvit/', text: 'Посилання на живу сторінку звіту  ' },
        { url: 'https://github.com/AnichkaT/Independ.git ', text: 'Посилання на репозиторій самостійної роботи  ' },
        { url: ' https://anichkat.github.io/Independ/', text: 'Посилання на живу сторінку самостійної роботи  ' }
      ];



    links.forEach(link => {
        
        const newLink = document.createElement('a');
        newLink.href = link.url; 
        newLink.textContent = link.url; 
        textDiv.innerHTML +=link.text
        textDiv.appendChild(newLink);

        textDiv.appendChild(document.createElement('br'));
    });
}


function secondButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p>Завдання 1</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab3/task1/Screenshot 2024-10-15 161644.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab3/task1/Screenshot 2024-10-15 161742.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab3/task1/Screenshot 2024-10-15 161821.png"  ></br>';

}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p>Завдання 2</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab3/task2/Screenshot 2024-10-15 194859.png" ></br>';
    textDiv.innerHTML +='<img src="Lab3/task2/Screenshot 2024-10-15 194134.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab3/task2/Screenshot 2024-10-15 194554.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab3/task2/Screenshot 2024-10-15 194623.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab3/task2/Screenshot 2024-10-15 194633.png" >';
}


function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p>Скріншот сторінки</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab3/task3/Screenshot 2024-10-23 201037.png" ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201053.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201103.png"  >';
}


function fifthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p>HTML-код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab3/task3/Screenshot 2024-10-23 201356.png" ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201408.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201417.png"  >';
}

function sixButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p>CSS-код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab3/task3/Screenshot 2024-10-23 201258.png" ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201309.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201320.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab3/task3/Screenshot 2024-10-23 201329.png"  >';
}


function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи  верстки сторінок засобами CSS, верстки на '+
    'основі плаваючих елементів, з’ясувала переваги та недоліки типів веб-сторінок'+
    ' , а також придбала практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   </p>';
    textDiv.innerHTML += 'Контрольні питання:'+
            '<ul> <li>1. Фіксована верстка (Fixed Layout) - підхід до створення сторінок сайту, які мають задану ширину. Ширина компонентів на сторінці не змінюється. На моніторах з низькою роздільною златністю з\'являється горизонтальна смуга прокрутки. Даний тип верстки не підходить для зручного відображення інформації на мобільних пристроях.</li>'+
            '<li>2. Гумова верстка (Elastic Layout) передбачає можливість компонентів сайту міняти свої розміри в залежності від розміру вікна браузера, розтягуватися від і до зазначених мінімальних і максимальних розмірів. Це досягається завдяки використанню відносних значень, max-width / min-width (максимальна / мінімальна ширина), max-height / min-height (максимальна / мінімальна висота).</li>'+
            '<li>3. Гумова верстка (Elastic Layout) передбачає можливість компонентів сайту міняти свої розміри в залежності від розміру вікна браузера, розтягуватися від і до зазначених мінімальних і максимальних розмірів. Це досягається завдяки використанню відносних значень, max-width / min-width (максимальна / мінімальна ширина), max-height / min-height (максимальна / мінімальна висота).</li>'+
            '<li>4. Адаптивна верстка (Adaptive Layout) дозволяє підлаштовуватися основному контейнеру і будь-якому іншому елементу сайту під роздільну здатність екрану, роблячи можливим змінюваність розміру шрифту, розташування об\'єктів, колір і т. д. Відбувається це динамічно, наприклад, з використанням медіа-запитів (@media), які дозволяють автоматично визначати роздільну здатність монітора, тип пристрою і підставляти зазначені значення в автоматичному режимі.</li>'+
            '<li>5. Комбінована верстка- це та верстка, якою можна охарактеризувати, що  на одній сторінці (одному розвороті) поєднуються різні типи верстки.</li>'+
            '<li>6. За допомогую таких засобів: div, display, max і mmin width або height, flex-diraction, align-items </li>'+
            '</ul>';
    
    
}
























