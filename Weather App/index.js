const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weatherDetails');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey = '84d2c1ed4f695160ec4781a6ab4d9084';
    const city = document.querySelector('.search-box input').value;

    if (city === ''){
        return;
    }
    else{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then (json => {

            if (json.cod === '404'){
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
            }
        })
    }

        


})