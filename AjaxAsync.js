async function getCuaca (cur) {
    try {
        const hasil = await fetch(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cur}/`
        );
        const data = await hasil.json();
        const besok = data.consolidated_weather[1];
        console.log(
            `Temperatur di ${data.title} esok hari, perkiraan dari ${parseInt(besok.min_temp)}°C - ${parseInt(besok.max_temp)}°C`
        );
        return data;
    } catch (error) {
        console.log('error')
    }
}

getCuaca(1047378);
let denpasar;
getCuaca(1047372).then(el => {
    denpasar = el;
    console.log(denpasar)
});