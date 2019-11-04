const Twitter = require('twitter');
const request = require('request');


const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    twitter_token: process.env.TWITTER_TOKEN
});


var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

client.get('search/tweets', params, function(err, data, response) {
    // If there is no error, proceed
    if(!err){
      // Loop through the returned tweets
      for(let i = 0; i < data.statuses.length; i++){
        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to Favorite the selected Tweet
        T.post('favorites/create', id, function(err, response){
          // If the favorite fails, log the error message
          if(err){
            console.log(err[0].message);
          }
          // If the favorite is successful, log the url of the tweet
          else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
      }
    } else {
      console.log(err);
    }
  })



// const options = {
//     url: 'https://api.twitter.com/1.1/help/configuration.json',
//     method: 'GET',
  

// }

// request(options, function(err, res, body) {
//     let json = JSON.parse(body);
//     console.log(json);
// });

// let url = 'https://api.twitter.com/1.1/help/configuration.json'

// fetch(url)