const API_KEY = process.env.REACT_APP_API_KEY;

const makeIconURL = (iconId: any) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  function containsOnlyDigits(str:string) {
    return /^\d+$/.test(str);
  }
  function containsCharsAndDigits(str:string) {
    return /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(str);
  }

const getFormattedWeatherData = async (city: string, units = "metric") => {
  const URL1 = `https://api.openweathermap.org/data/2.5/weather?zip=${city},in&appid=${API_KEY}&units=${units}`;
  const URL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${API_KEY}&units=${units}`;
  var URL;

  if ( containsOnlyDigits(city) ){
     URL = URL1;
  }
  else{
    URL = URL2;
  }
  console.log(URL)
  if ( city && ! containsCharsAndDigits(city)){
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    console.log(data.weather)
    if ( !data?.weather ) alert("Invalid City Name or Zip Code")
  if ( data?.weather ){
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
}
else return null
}
else{
  return null
}
};

// 
export { getFormattedWeatherData };