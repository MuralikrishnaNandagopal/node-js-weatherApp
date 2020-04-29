const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0d1ea10cbce3a554d948ee92d011423b&query='+ encodeURI(address) +'&units=m'
    
        request({ url, json: true }, (error, { body }) => {
        console.log("Inside forecast.js")
        console.log(body)
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, body.current.weather_descriptions[0] + " It's currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
            }
        })
    }
    

module.exports = forecast