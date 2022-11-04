    // declare variables and assign objects & inout from form
    let input =document.title;
    let main =document.querySelector('#name');
    let icon =document.querySelector('.icon');
    let temp =document.querySelector('.temp');
    let desc =document.querySelector('.desc');

function currentWeather(){    // API call
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=4be03f7951a3a5dbf4b98201a6019e8d&units=metric')//4be03f7951a3a5dbf4b98201a6019e8d
    //arrow function
    .then(response => response.json()) // returns the json feed containing the data
    .then(data => {

        let tempValue = data['main']['temp']; //API > json feed > main > temp
        let iconValue = data['weather'][0]['icon'];
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
        
        main.innerHTML = nameValue;
        icon.src = `https://openweathermap.org/img/wn/${iconValue}.png`; // insert the weather API url for icons. [https://openweathermap.org/img/wn/${iconValue}.png]
        desc.innerHTML = `${descValue}`;
        temp.innerHTML = `${tempValue}` + "&#x2103";
    })
    //if an error occurs return the error
    .catch( err => alert("please enter a valid city or resort!")); 
    
};

window.onload = currentWeather();