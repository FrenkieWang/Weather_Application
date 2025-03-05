document.addEventListener('DOMContentLoaded', () => {
    let weatherData = [];

    // fetch('sample.json')
    fetch('https://raw.githubusercontent.com/FrenkieWang/Weather_Sample_JSON/refs/heads/master/sample.json')
        .then(response => response.json())
        .then(data => weatherData = data)
        .catch(error => console.error(error));

    const searchBox = document.getElementById('searchBox');
    const suggestionsDiv = document.getElementById('suggestions');
    const resultDiv = document.getElementById('result');
    let currentCityData = JSON.parse(localStorage.getItem('currentCityData'));

    if (currentCityData) {
        resultDiv.innerHTML = `<div class="default">Find: ${currentCityData.cityName}</div>`;
        searchBox.placeholder = currentCityData.cityName;
    }

    // Show suggestion box when user type in search box
    searchBox.addEventListener('input', () => {
        const searchValue = searchBox.value.toLowerCase();
        suggestionsDiv.innerHTML = '';

        const filteredCities = weatherData.filter(item => item.cityName.toLowerCase().includes(searchValue));
        filteredCities.forEach(city => {
            const suggestion = document.createElement('div');
            suggestion.textContent = city.cityName;
            suggestion.addEventListener('click', () => {
                searchBox.value = city.cityName;
                suggestionsDiv.innerHTML = '';
            });
            suggestionsDiv.appendChild(suggestion);
        });
    });

    // Show all suggestions when search box is focused
    searchBox.addEventListener('focus', () => {
        suggestionsDiv.innerHTML = '';
        weatherData.forEach(city => {
            const suggestion = document.createElement('div');
            suggestion.textContent = city.cityName;
            suggestion.addEventListener('click', () => {
                searchBox.value = city.cityName;
                suggestionsDiv.innerHTML = '';
            });
            suggestionsDiv.appendChild(suggestion);
        });
        suggestionsDiv.style.display = 'block';
    });

    // Using localStorage to store the current city data
    document.getElementById('searchButton').addEventListener('click', () => {
        const searchValue = searchBox.value.toLowerCase();
        currentCityData = weatherData.find(item => item.cityName.toLowerCase() === searchValue);

        if (currentCityData) {
            localStorage.setItem('currentCityData', JSON.stringify(currentCityData));
            resultDiv.innerHTML = `<div class="default">Find: ${currentCityData.cityName}</div>`;
        } else {
            localStorage.removeItem('currentCityData');
            resultDiv.innerHTML = '<div class="not-found">404 Not Found</div>';
        }
    });

    // When click other area, close the suggestion box
    document.addEventListener('click', (event) => {
        if (!searchBox.contains(event.target) && !suggestionsDiv.contains(event.target)) {
            suggestionsDiv.style.display = 'none';
        }
    });
});