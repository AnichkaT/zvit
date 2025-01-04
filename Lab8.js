function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.</p>';

    textDiv.innerHTML += '<p>Мета:  придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; '
    +' закріпити навички роботи з делегуванням подій.</p>';

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
    textDiv.innerHTML +='<p>Завдання 1</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-02 153859.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-02 153823.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-03 084150.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-03 084200.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab8/Task1.html\', \'_blank\');">Завдання 1</button>';

    

}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 2</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-03 084358.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-03 084406.png"  ></br>';

    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-03 084618.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab8/Screenshot 2025-01-03 084629.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab8/Task2.html\', \'_blank\');">Завдання 2</button>';


    
}


function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи створення модального вікна, повторила процес створення макету, зокрема створення макету галереї довільних зображень '+
    ', та закріпила навички роботи з делегуванням подій.</p>';
   

}


































