import * as weatherApiService from './weatherApiService';
import * as displayService from './displayService';

export function start() {
    addWeatherButtonEventListener();
}

function addWeatherButtonEventListener() {
    const form = document.querySelector('#location-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let location = e.target[0].value;
        getAndDisplayWeather(location);
        return location;
    });
}

function getAndDisplayWeather(location) {
    let currentTemperature = weatherApiService.getCurrentTemp(location);
    displayService.displayWeather(currentTemperature);
}