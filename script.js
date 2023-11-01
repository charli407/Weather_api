const apiKey= "ca9e52feb23a8a9788359c20fec3f715";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input")
const searchbutton=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl+city + `&appid=${apiKey}`);
    if(response.status==404)
    {
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }
    else{
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ " °C";
        document.querySelector(".humidity").innerHTML= data.main.humidity+" %";
        document.querySelector(".wind").innerHTML= data.wind.speed+" Km/h";
        if(data.weather[0].main =="Clouds"){
            weathericon.src="./images/clouds.png";
        }
        else if(data.weather[0].main =="Clear"){
            weathericon.src="./images/clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            weathericon.src="./images/rain.png";
        }
        else if(data.weather[0].main =="Drizzle"){
            weathericon.src="./images/drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            weathericon.src="./images/mist.png";
        }
        else if(data.weather[0].main =="Snow"){
            weathericon.src="./images/snow.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
}
searchbutton.addEventListener('click',()=>{
    checkWeather(searchbox.value);
})


