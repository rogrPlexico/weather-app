export async function displayWeather(data) {
    const displayDiv = document.querySelector('#weather-display');
    let elData = await data;
    displayDiv.textContent = elData;
}

export function displayLocation(location) {

}