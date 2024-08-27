// Now a little bit more realistic:
const fetch = require('node-fetch');

const url = 'http://swapi.py4e.com/api/people';

const getPeoplePromise = (fetch) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return {
                count: data.count,
                results: data.results,
            };
        });
};

const getPeople = async (fetch) => {
    const getRequest = await fetch(url);
    const data = await getRequest.json();

    console.log(data);

    return {
        count: data.count,
        results: data.results,
    };
};

getPeople(fetch);
getPeoplePromise(fetch);

module.exports = {
    getPeoplePromise,
    getPeople,
};
