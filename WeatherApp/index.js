var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="f13aeeebcbadbf5b7fa23a7052d3ced6"

function conversion(val){ //conversion of Fahrenheit to Celsius
    return(val-273).toFixed(3) //When we convert, we need to subtract 273 and use toFixed to round off the value to 3 decimal places.

}
btn.addEventListener('click',function()
{
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())

    .then(data=>
    {
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var temprature=data['main']['temp']
        var wndspeed=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}</span>`
        temp.innerHTML=`Temperature:<span>${conversion(temprature)} C</span>`
        description.innerHTML=`Sky Conditions:<span>${descrip}</span>`
        wind.innerHTML=`Wind Speed:<span>${wndspeed} km/h</span>`

    })

    .catch(err=>alert('You entered Wrong city name'))
})

