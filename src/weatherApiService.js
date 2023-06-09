import { getUnitPreference } from "./webStoreService";

async function getWeather(location) {
    let queryLocation = location;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e6d50905f4c041cea17182541230606&q=${queryLocation}&aqi=no`);
    return await response.json();
}

export async function getCurrentTemp(location) {
    let json = await getWeather(location);
    let unitPreference = getUnitPreference();
    
    try {
        return json.current[`temp_${unitPreference}`];
    } catch {
        return ("309 F"); 
}
}

