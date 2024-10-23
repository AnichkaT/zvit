function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: Класифікація таблиць стилів. Селектори. '+
    'Індентифікатори. Стильове оформлення текстових документів в HTML- документах</p>';

    textDiv.innerHTML += '<p>Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, '+
    'списками,  різноманітними властивостями кольору і фону,  зовнішними та  '+
    'внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів</p>';

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
    textDiv.innerHTML += 'Є наступні способи підключення стилів до документу:'+
    '<ul> <li> Вбудовані стилі (підключення стилів за допомогою атрибуту style.)</li>'+
    '<li>  Внутрішні стилі (написання внутрішних стилів у тезі style)</li>'+
    '<li> Зовнішні стилі (написання зовнішних стилів в окремому файлі з розширенням .css, підключається до сторінки html через тег <link>)</li>'+
    '<li> Імпорти (Іпорт інших CSS файлів в інший CSS файл)</li>'+
    '</ul>';
    ;
    
}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML = ' <p>Селектор тегу дозволює стилізувати весь вміст даного тегу.</p>';
    textDiv.innerHTML += ' <p>Наприклад можна визначити такий селектор тегу як buttom у ньому можна прописати, якого кольору, розміру чи форми будуть всі кнопки на сторінці </p>';
    textDiv.innerHTML += ' <pre> button{'+
    'background-color: #04AA6D;'+
    'color: white;'+
    'margin: 10px ;'+
    'text-align: center;'+
    '} </pre>';
    
    const firstImage = document.createElement('img');
    firstImage.src = 'Lab2/Screenshot 2024-10-09 163441.png'; 
    firstImage.alt = 'Зображення'; 
    textDiv.appendChild(firstImage);
    textDiv.innerHTML +='</br>';
    const secondImage = document.createElement('img');
    secondImage.src = 'Lab2/Screenshot 2024-10-09 163948.png'; 
    secondImage.alt = 'Зображення'; 
    textDiv.appendChild(secondImage);

    
}


function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Селектор класу дозволює стилізувати елементи  даного класу.</p>';
    textDiv.innerHTML += ' <p>Наприклад можна визначити такий селектор класу як labButtoms у ньому можна прописати, якого кольору, розміру чи форми будуть всі кнопки, в яких зазначено даний клас </p>';

    textDiv.innerHTML += ' <pre> .labButtoms {'+
    'background-color: #04AA6D;'+
    'color: white;'+
    'margin: 10px ;'+
    'text-align: center;'+
    '} </pre>';

    const firstImage = document.createElement('img');
    firstImage.src = 'Lab2/Screenshot 2024-10-09 163441.png'; 
    firstImage.alt = 'Зображення'; 
    textDiv.appendChild(firstImage);
    textDiv.innerHTML +='</br>';
    const secondImage = document.createElement('img');
    secondImage.src = 'Lab2/Screenshot 2024-10-09 163849.png'; 
    secondImage.alt = 'Зображення'; 
    textDiv.appendChild(secondImage);




    
}

function fifthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML = ' <p>Селектор індетифікотора дозволює стилізувати елемент з чим індитифікатором.</p>';
    textDiv.innerHTML += ' <p>Наприклад можна визначити такий селектор індетифікатора як #firstParagraf у ньому можна прописати, якого кольору, розміру чи розташування буде текст данного параграфа з індетифікатором firstParagraf</p>';
    textDiv.innerHTML += ' <pre> #firstParagraf{'+
    'color: #04AA6D;'+
    'text-align: center;'+
    '} </pre>';

    const firstImage = document.createElement('img');
    firstImage.src = 'Lab2/Screenshot 2024-10-09 164511.png'; 
    firstImage.alt = 'Зображення'; 
    textDiv.appendChild(firstImage);
    textDiv.innerHTML +='</br>';
    const secondImage = document.createElement('img');
    secondImage.src = 'Lab2/Screenshot 2024-10-09 164459.png'; 
    secondImage.alt = 'Зображення'; 
    textDiv.appendChild(secondImage);


    
}


function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи  з селекторами, ідентифікаторами,'+
    'списками,  різноманітними властивостями кольору і фону,  зовнішними та'+
    ' внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів</p>';
    textDiv.innerHTML += 'Контрольні питання:'+
            '<ul> <li>1. Каскадні таблиці стилів описують правила стилізації елементів за допомогою властивостей та допустимих для них значень. </li>'+
            '<li>2. Існують такі методи визначення стилів - вбудовані стилі, внутрішні стилі, зовнішні стилі, імпорти </li>'+
            '<li>3. Вони виконуються ось так (.labButtons {} - селектор класу, button {} - cелектор тегу )</li>'+
            '<li>4. Ідентифікатор  в HTML використовується для ідентифікації окремого елемента на веб-сторінці. Він дозволяє надавати специфічні стилі та функціональність певному елементу.</li>'+
            '<li>5. Наприклад: color, font-family, text-align, line-height </li>'+
            '</ul>';
    
    
}

function sixButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p>Приклади стилізації тексту</p>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-09 171726.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-09 171715.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-09 171845.png"  ></br>';



    textDiv.innerHTML +='<p>Приклади стилізації таблиці</p>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-03 154825.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-09 172036.png" ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab2/Screenshot 2024-10-09 164753.png"  ></br>';

   
    textDiv.innerHTML +='<p>Приклади стилізації списків</p>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-09 172425.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab2/Screenshot 2024-10-09 172503.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;"src="Lab2/Screenshot 2024-10-09 172519.png"  ></br>';
    
}
