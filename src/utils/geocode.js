const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) +'.json?access_token=pk.eyJ1IjoibXVyYWxpa3Jpc2huYTE0MDgiLCJhIjoiY2s5Y3F5bmw1MDZ2NjNsczA3dXFmNmZnaSJ9.gVvQg-cMjniPsa1_FWxxWQ&limit=1'

    request({ url, json: true }, (error, { body }) => {
        console.log("Inside GeoCode.js")
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

