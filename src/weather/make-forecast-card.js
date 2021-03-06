export function makeForecastCard(day) {
    const html = /*html*/ `
        <li class="forecast-item">
            <p>Date + Time: ${day.dt_txt}</p> 
            <p>Temp: ${day.main.temp}°  Weather: ${day.weather[0].description}</p>
        </li>   
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadWeather(forecast) {
    const forecastDisplay = document.getElementById('forecast-list');
    forecast.list.forEach(day => {
        const dom = makeForecastCard(day);
        forecastDisplay.appendChild(dom);
    });
}