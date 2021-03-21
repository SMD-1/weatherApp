const submitBtn = document.querySelector('.submitBtn');
const input = document.querySelector('.input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');

submitBtn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=be5e3aac9a59ebd3aa212105acead9bd&units=metric')
        .then(response => response.json())
        .then(data => {
            city.innerHTML = data['name'];
            temp.innerHTML = 'Tempreature: ' + data['main']['temp'] + '°C';
            desc.innerHTML = data['weather'][0]['description'];
        })
    .catch(err => alert('Wrong city name'))


})

