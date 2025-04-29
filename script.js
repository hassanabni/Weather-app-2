const input = document.querySelector(".input-btn");
const searchBtn = document.querySelector(".search-btn");
const temperature = document.querySelector('.temp');
const cityName = document.querySelector('.cityName');


async function getData(){
    let city = input.value

    const apiKey = "ae98ab0012284656745842ca80c41790" ;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
    if(!city){
      alert("Pls enter a city name");
      return;
    }

    fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
    cityName.innerHTML=(userData.name)

    //CONVERTING FARENHEIT TO CELCIUS
    let kelvin = userData.main.temp ;
    let celcius = Math.round(kelvin - 273.15) ;
    console.log(celcius);
    temperature.innerHTML =(celcius + '\u00B0C')
  })
  .catch(error => {
    cityName.innerHTML = "City not found!";
    temperature.innerHTML = "";
    console.error('Error:', error);
  });
  
}

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      getData();
  }
});
searchBtn.addEventListener('click',getData)