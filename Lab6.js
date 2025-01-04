function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: ОБ\'ЄКТ. МЕТОДИ ОБ\'ЄКТА. МАСИВ ОБ\'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ\'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.</p>';

    textDiv.innerHTML += '<p>Мета:  придбати практичні навички роботи з об\'єктами. Методи об\'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT</p>';

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
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task2/Screenshot 2024-12-05 141215.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task2/Screenshot 2024-12-05 161521.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task2/Screenshot 2024-12-05 161534.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab6/Task2/Screenshot 2024-12-05 161546.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab6/Task2/Task2.html\', \'_blank\');">Завдання 2</button>';

}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 4</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task4/Screenshot 2024-12-05 142652.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task4/Screenshot 2024-12-05 142714.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab6/Task4/Screenshot 2024-12-05 142730.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab6/Task4/Task4.html\', \'_blank\');">Завдання 4</button>';

}



function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 6</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task6/Screenshot 2024-12-05 143804.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task6/Screenshot 2024-12-05 143817.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab6/Task6/Screenshot 2024-12-05 143847.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab6/Task6/Task6.html\', \'_blank\');">Завдання 6</button>';

}


function fifthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 8</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task8/Screenshot 2024-12-05 144632.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task8/Screenshot 2024-12-05 151207.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task8/Screenshot 2024-12-05 151218.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab6/Task8/Screenshot 2024-12-05 151228.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab6/Task8/Task8.html\', \'_blank\');">Завдання 8</button>';

}

function sixButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 10</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task10/Screenshot 2024-12-05 150854.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task10/Screenshot 2024-12-05 155905.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task10/Screenshot 2024-12-05 155918.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab6/Task10/Screenshot 2024-12-05 155937.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab6/Task10/lab5_Task5.html\', \'_blank\');">Завдання 10</button>';

}


function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи з об\'єктами, методами об\'єктів, стрілочними функціями, Стрілочними функціями як колбеки '+
    ', та реалізувала програми засобами мови JAVASCRIPT</p>';
   

}












































