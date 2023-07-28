const axios = require('axios');
const Person = require('./components/people/model');
const Film = require('./components/films/model');
const Vehicle = require('./components/vehicles/model');
const Planet = require('./components/planets/model');

const seedData = async () => {
  try {
    const allPeople = await getAllResults('https://swapi.dev/api/people/');
    for (const personData of allPeople) {
      await Person.findOneAndUpdate({ url: personData.url }, personData, { upsert: true });
    }

    const allFilms = await getAllResults('https://swapi.dev/api/films/');
    for (const filmData of allFilms) {
      await Film.findOneAndUpdate({ url: filmData.url }, filmData, { upsert: true });
    }

    const allVehicles = await getAllResults('https://swapi.dev/api/vehicles/');
    for (const vehicleData of allVehicles) {
      await Vehicle.findOneAndUpdate({ url: vehicleData.url }, vehicleData, { upsert: true });
    }

    const allPlanets = await getAllResults('https://swapi.dev/api/planets/');
    for (const planetData of allPlanets) {
      await Planet.findOneAndUpdate({ url: planetData.url }, planetData, { upsert: true });
    }
  } catch (error) {
    console.error('Error al obtener datos de Star Wars:', error.message);
  }
};

// Función recursiva para obtener todos los resultados de una API paginada
const getAllResults = async (url) => {
  try {
    const results = [];
    let nextUrl = url;

    while (nextUrl) {
      // Realizar múltiples solicitudes en paralelo para obtener varias páginas
      const requests = [];
      for (let i = 0; i < 3; i++) {
        if (nextUrl) {
          requests.push(axios.get(nextUrl));
          nextUrl = null;
        }
      }

      const responses = await Promise.all(requests);
      for (const response of responses) {
        const data = response.data;
        results.push(...data.results);

        // Si hay más páginas, actualizar nextUrl para obtener la siguiente página
        if (data.next) {
          nextUrl = data.next;
        }
      }
    }

    return results;
  } catch (error) {
    console.error('Error al obtener datos de la API:', error.message);
    throw error;
  }
};

module.exports = seedData;

