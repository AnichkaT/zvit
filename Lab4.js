function firstButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';

    textDiv.innerHTML = ' <p>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. </p>';

    textDiv.innerHTML += '<p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First. </p>';

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
    textDiv.innerHTML +='<p>Скріншот сторінки </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 131854.png"  ></br>';
    textDiv.innerHTML +='<p>HTML-код </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 132234.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132242.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132251.png"  ></br>';
    textDiv.innerHTML +='<p>CSS-код </p>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132619.png"  ></br>';

}

function thirdButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Скріншот сторінки </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 132149.png"  ></br>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 132200.png"  ></br>';

    textDiv.innerHTML +='<p>HTML-код </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 132234.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132242.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132251.png"  ></br>';
    textDiv.innerHTML +='<p>CSS-код </p>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132349.png"  ></br>';
}


function fourthButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML +='<p>Скріншот сторінки </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 132216.png"  ></br>';
    textDiv.innerHTML +='<p>HTML-код </p>';
    textDiv.innerHTML +='<img style="max-width: 100%; height: auto;" src="Lab4/Screenshot 2024-10-25 132234.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132242.png"  ></br>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132251.png"  ></br>';
    textDiv.innerHTML +='<p>CSS-код </p>';
    textDiv.innerHTML +='<img src="Lab4/Screenshot 2024-10-25 132858.png"  ></br>';

}



function conclusionButton() {
    var textDiv = document.getElementById('text');

    textDiv.textContent = '';
    textDiv.innerHTML ='<p align="center">Висновок</p>';
    textDiv.innerHTML += ' <p> Я придбала практичні навички роботи  верстки сторінок засобами CSS, верстки на '+
    'основі плаваючих елементів, придбала практичні навички роботи з медіа-запитами, медіа-типами та медіа-функціями</p>';
    
}






