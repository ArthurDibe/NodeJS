/* ************************************************* 
    AUTHOR: Dibe

    DESCRIPTION:
        In this file it you can find out a way
        to retrieve the live temperature from
        a geoposition location, and you can
        find out how to retrieve the geoposition
        (longitude and latitude) from a specific
        address.
        
        To retrieve the JSON object from the websites
        in a easy way, you can install npm package
        called "request" which request the information
        from an url that contains JSON object.

        - Npm 3rd party package: request
        - API for Temperature: darksky.net
        - API for Geocoding: mapbox.com

************************************************** */

const request = require('request');

// url gotten from darksky.net that provides live weather information
// the link retrieves the JSON string that represents an object with
// weather information
//
// AFTER THE END OF THE URL ....
// INSERT A QUESTION MARK TO START CUSTOMIZING THE REQUEST INFORMATION RETRIEVING FROM THE WEBSITE
//
// Check th website for more information: https://darksky.net/dev/docs#forecast-request

const weatherURL = 'https://api.darksky.net/forecast/eea791e82737306478eb32f51f138c4b/37.8267,-122.4233?units=si&lang=en';


// attributes---> url: receives an URL, 
//                json: if set to "true",the request object will parse a json object automaticaly for us like "JSON.parse(jsonObj)"
request({url: weatherURL, json: true}, (err, res)=>
{
    // console.log(res.body.currently);    // currently has the more focused information about the weather
    console.log(`\n${res.body.daily.data[0].summary} It is currently ${res.body.currently.temperature} degrees out. There is a ${res.body.currently.precipProbability}% chance of rain.\n`);
});



// retrieving latitude and longitude from mpbox API .json file to geocode! based on an address, we retrieve its geoposition
// this case Los Angeles
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJ0aHVyZHYiLCJhIjoiY2syMHllN2c2MHVqMzNjbWZnYWR2bzB1dSJ9.OLNOhSq6qHPoLjsA-JDOhg';

request({url: geoURL, json: true}, (err, res)=>
{
    console.log(`\nLongitude: ${res.body.features[0].center[0]}\nLatitude: ${res.body.features[0].center[1]}`);
});