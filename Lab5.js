function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT</p>';

    textDiv.innerHTML += '<p>Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT </p>';

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
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task1/Screenshot 2024-11-13 175148.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task1/Screenshot 2024-11-13 175134.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab5/Task1/Screenshot 2024-11-13 175106.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab5/Task1/lab5_Task1.html\', \'_blank\');">Завдання 1</button>';

}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 2</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task2/Screenshot 2024-11-13 182250.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task2/Screenshot 2024-11-13 182235.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab5/Task2/Screenshot 2024-11-13 182153.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab5/Task2/lab5_Task2.html\', \'_blank\');">Завдання 2</button>';

}



function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 3</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task3/Screenshot 2024-11-13 194847.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task3/Screenshot 2024-11-13 194838.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab5/Task3/Screenshot 2024-11-13 194821.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab5/Task3/lab5_Task3.html\', \'_blank\');">Завдання 3</button>';

}


function fifthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Завдання 3</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task4/Screenshot 2024-11-13 202031.png"  ></br>';
    
    textDiv.innerHTML +='<p>Js код</p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task4/Screenshot 2024-11-13 201945.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task4/Screenshot 2024-11-13 202000.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab5/Task4/Screenshot 2024-11-13 202014.png"  ></br>';
    
    textDiv.innerHTML +='<p>Результат </p>';
    textDiv.innerHTML +='<img src="Lab5/Task4/Screenshot 2024-11-13 201925.png"  ></br>';
    textDiv.innerHTML += '<button onclick="window.open(\'Lab5/Task4/lab5_Task4.html\', \'_blank\');">Завдання 4</button>';

}




function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  '+
    ', та реалізувала програми засобами мови JAVASCRIPT</p>';
    
}












































