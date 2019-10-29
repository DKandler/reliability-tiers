const Twitter = require('twitter');
const request = require('request');


const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_TOKEN
});

const options = {
    url: '',
    method: 'GET',

}

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});