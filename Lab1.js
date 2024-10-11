function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: Бібліотека української класики</p>';
    textDiv.innerHTML += '<p>Мета: Полегшення знаходження інформація про авторів та книги, читання книг</p>';
    textDiv.innerHTML += '<p>Опис предметної області: Застосунок дозволяє переглядати'+
    'всю доступну інформацію про книгу (її автора, рік видання та ін. ), читати ці'+
    'книги, перегляд всієї доступної інформації про автора</p>';
    textDiv.innerHTML += 'Сценарій:'+
            '<ul> <li>можливість авторизації</li>'+
            '<li>можливість додавання книги</li>'+
            '<li>можливість перегляду інформації про книгу</li>'+
            '<li>можливість перегляду інформації про автора</li>'+
            '</ul>';
    
    
    
}

function secondButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: структура HTML-документа. '+
    'Вибір предметної  галузі. Робота з посиланнями, таблицями,'+
    'зображеннями, списками в HTML-документі.</p>';
    textDiv.innerHTML += '<p>Мета: придбати практичні навички роботи  з HTML-документом, таблицями, '+
    'зображеннями, посиланнями, списками, формами, створити шаблон звітного HTML-документом '+
    'для відображення результатів роботи всіх лабораторних робіт</p>';

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

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p> Код таблиць виглядає наступним чином </p>';

    const firstImage = document.createElement('img');
    firstImage.src = 'Screenshot 2024-10-03 154825.png'; 
    firstImage.alt = 'Зображення'; 
    textDiv.appendChild(firstImage);
    textDiv.innerHTML +='</br>';
    const secondImage = document.createElement('img');
    secondImage.src = 'Screenshot 2024-10-09 164753.png'; 
    secondImage.alt = 'Зображення'; 
    textDiv.appendChild(secondImage);

    
}

function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p> Код форми виглядає наступним чином </p>';

    const firstImage = document.createElement('img');
    firstImage.src = 'Screenshot 2024-10-03 155108.png'; 
    firstImage.alt = 'Зображення'; 
    textDiv.appendChild(firstImage);
    textDiv.innerHTML +='</br>';
    const secondImage = document.createElement('img');
    secondImage.src = 'Screenshot 2024-10-09 164839.png'; 
    secondImage.alt = 'Зображення'; 
    textDiv.appendChild(secondImage);
    
}

function fifthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p> Код фото виглядає наступним чином </p>';
    const imageUrl = 'Screenshot 2024-10-03 155521.png';
    
    const newImage = document.createElement('img');
    newImage.src = imageUrl; 
    newImage.alt = 'Зображення'; 
    textDiv.appendChild(newImage);

    textDiv.innerHTML += ' <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">';
    
}


function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками та формами.'+
    ' Навчилася створювати шаблон звітного HTML-документа для відображення результатів робіт всіх лабораторних. </p>';
    textDiv.innerHTML += 'Контрольні питання:'+
            '<ul> <li>1. Така структура  html, head, body, footer, main, header</li>'+
            '<li>2. Теги – це спеціальні елементи розмітки, що визначають, як даний документ HTML має інтерпретуватися програмою перегляду інформації – браузером.</li>'+
            '<li>3. Використовуються теги table, tr, th, td</li>'+
            '<li>4. Використовуються тег img</li>'+
            '<li>5. Використовуються теги ul,dl,ol,li</li>'+
            '<li>6. Для запису таблиці використовують такі теги table, tr, th, td, caption</li>'+
            '</ul>';
    
    
}







