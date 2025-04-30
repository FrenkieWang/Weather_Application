# Assignment 2: Weather JSON Application

## Introduction

Develop a web application that retrieves weather data from a local JSON file and dynamically updates the page content based on the received information. Users can input their location (city name), and the application will display relevant weather forecast details such as temperature, humidity, UV index, wind speed, etc.

## Objective

- Develop a web application structured into organized HTML, CSS, and JavaScript files.
- Utilize JavaScript to fetch data from a JSON file and display it dynamically.
- Implement CSS styles that adjust based on the user's input location, including background images, icon colors, and page appearance, reflecting the weather conditions.

### Part 1: HTML (Hypertext Markup Language) (30%)

Creating the basic structure of the web application.

#### Includes:

- **Boilerplate**: Initialize the web application with an organized folder structure containing `index.html`, `styles.css`, and `script.js` and a folder for the following HTMl pages.
- **Home Page**: Develop a Home Page featuring a heading, an input field for the city name, a button to submit the input, and a navbar with four buttons to pages for Temperature, Humidity, UV Index, and Wind Speed.
- **Temperature Section**: Create a HTML page displaying the temperature with a title, a paragraph (with an id for temperature data), a toggle button for Fahrenheit and Celsius, and space for a thermometer icon.
- **Humidity Section**: Develop a HTML page displaying the humidity with a title, a paragraph (with an id for humidity data), and space for a drop icon.
- **UV Index Section**: Implement a HTML page displaying the UV Index with a title, a paragraph (with an id for UV data), and space for a sun icon.
- **Wind Speed Section**: Create a HTML page displaying wind speed with a title, a paragraph (with an id for wind data), and space for a gust of air icon.

### Part 2: CSS (Cascading Style Sheets) (10%)

Styling the web application dynamically based on weather data.

#### Includes:

- **Boilerplate**: Ensure each HTML page has appropriate styling using `styles.css`.
- **Background Color**: Give each HTML page a unique background color.

### Part 3: JS (JavaScript) (40%)

Implementing functionality using JavaScript, including fetching data from the JSON file and updating styles dynamically.

#### Include:

- **JSON Data Integration**: Upon user input (city search), fetch weather data from a local JSON file using the Fetch API. Parse the received data and update the respective elements (Temperature, Humidity, UV Index, Wind Speed) with data from the input city accordingly.
- **Style Updates**: Dynamically adjust the color of icons within each section based on weather conditions. For example, if the temperature exceeds 20°C, the temperature icon should turn yellow; otherwise, it should remain blue. Apply similar color adjustments for wind speed, humidity, and UV (you can choose the threshold).

### Task 4: Deployment (20%)

#### How to run this project?

1) Open the folder with VS Code
2) Open Terminal, type `npm install -g http-server` (install http-server)
3) Open Terminal, type `http-server` (run the project with http-server)
4) Open a web browser, input URL `http://localhost:8080/`(local project)

#### Link:

This project will be running on:
https://frenkiewang.github.io/Weather_Application/index.html