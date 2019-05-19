const cuaca = (cur) => {
    fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cur}/`
    )
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(
                `Temperatur di ${data.title} perkiraan dari ${parseInt(today.min_temp)}°C - ${parseInt(today.max_temp)}°C`
            );
        })
        .catch(err => {
            console.log('error')
        })
    }

cuaca(1047378);
cuaca(1047372);