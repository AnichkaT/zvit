function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: КЛАСИ. ОБ\'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ\'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ.</p>';

    textDiv.innerHTML += '<p>Мета:  придбати практичні навички роботи з об\'єктами. Методи об\'єкта.'
    +' Callback. Стрілочні функції. Стрілочні функції як колбеки.  Реалізація програм засовами мови JAVASCRIPT</p>';

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
    textDiv.innerHTML +='<p>Завдання 2</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-18 162931.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 141318.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task2.html\', \'_blank\');">Завдання 2</button>';

    

}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 4</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-18 171822.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 141349.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task4.html\', \'_blank\');">Завдання 4</button>';


    
}


function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 6</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 141458.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img src="Lab7/Screenshot 2024-12-26 141549.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task6.html\', \'_blank\');">Завдання 6</button>';
    

    

}

function fifthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 7</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 143457.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 144349.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task7.html\', \'_blank\');">Завдання 7</button>';
    


    





}

function sixButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 8</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 150907.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 150922.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task8.html\', \'_blank\');">Завдання 8</button>';


    
}

function seventhButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 9</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 151324.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-27 102142.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task9.html\', \'_blank\');">Завдання 9</button>';


    
}

function eighthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 10</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 153453.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-26 153520.png"  ></br>';
    
    textDiv.innerHTML +='<p>Код програми</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-27 102237.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab7/Screenshot 2024-12-27 102250.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab7/Task10.html\', \'_blank\');">Завдання 10</button>';


    
}

function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи з об\'єктами, методами об\'єктів, стрілочними функціями, Стрілочними функціями як колбеки '+
    ', та реалізувала програми засобами мови JAVASCRIPT</p>';
   

}


































