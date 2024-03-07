# GlobeMark <img src="dist/icon.png" style="width: 50px; height:50px;">

**Developer: Aleksandra Haniok**

GlobeMark is a React application that helps you track your travels and create a visual record of your adventures. It allows you to add cities to your list and view them on a world map, as well as view information about each city.

## Features

- View a list of cities and their locations on a map
- Click on a city marker to see detailed information about the city
- Create a new city by providing its details
- Delete a city from the list

## Getting Started

1. To get started with GlobeMark, you will need to have Node.js and Vite installed on your machine.

To install Node.js, visit the Node.js website: https://nodejs.org/en.

To install Vite, run the following command in your terminal:

```
npm install -g vite
```

Once you have Node.js and Vite installed, you can now:

2. Clone this repository to your local machine:

```
git clone https://github.com/aleksandracodes/globemark.git
```

3. Change into the project directory:

```
cd globemark
```

4. Install the dependencies:

```shell
npm install
```

5. Start the JSON server to serve the city data:

```shell
npm run server
```

6. Start the development server:

```shell
npm run dev
```

The development server will be running on http://localhost:5173. You can open this URL in your web browser to view the app.

## Configuration

The GlobeMark application uses a JSON server to provide city data. By default, the server is configured to run on `http://localhost:9000`. If you need to change the server URL, modify the `BASE_URL` constant in the `CitiesContext` component located in `src/contexts/CitiesContext.js`.

## Authentication

The GlobeMark application includes authentication functionality. You can log in using the following credentials:

- Email: `aleksandra@globemark.com`
- Password: `qwerty`

## Usage

To use GlobeMark, simply log in and start adding cities to your list.

**To add a city to your list:**

- Click on the position on the map where you want to add a city
- The city form will be displayed automatically
- You can fill out the city form, including the city name, country flag, date of visit, and notes about your trip. Alternatively, you can click on the "ADD" button without filling out the form to simply add a marker to the map
- Click the "ADD" button
- A marker will then appear on the map for the new city

**To remove a city from your list:**

- Click on the "&times;" button next to the city in the list.
- The marker for the city will then be removed from the map.

**To edit or update information for a city:**

- Click on the city in the list or on the map.
- The city form will be displayed with information about the city, including the city name, country flag, date of visit, and notes about your trip.
- Make the desired changes to the form.
- Click the "UPDATE" button.

**To view information about a city:**

- Click on the city name in the list or on the map.
- A form will be displayed with information about the city, including the city name, country flag, date of visit, and notes about your trip.

**To navigate the map to a city:**

- Click on the city name in the list or on the map.
- The map will navigate to the corresponding position. You can also zoom and pan the map to navigate to a city.

**To use the tab component:**

- Click on the tab that you want to view.
- The corresponding view will be displayed.

**To use the login and logout functionality:**

- To log in, click on the "LOGIN" button and enter your email address and password.
- To log out, click on the "LOGOUT" button.
-

## Libraries

- [ESLint](https://eslint.org)
- [JSON Server](https://github.com/typicode/json-server)
- [Leaflet](https://leafletjs.com)
- [React](https://reactjs.org)
- [React DatePicker](https://github.com/Hacker0x01/react-datepicker)
- [React Leaflet](https://react-leaflet.js.org)
- [React Router](https://reactrouter.com)

## Acknowledgements

The GlobeMark project was build as part of this [React course](https://www.udemy.com/course/the-ultimate-react-course/) with Jonas Schmedtmann.
The website's design and structure were provided as part of the course curriculum and I did not design the website from scratch.
