/* Setting things up. */
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');

var path = require('path'),
    express = require('express'),
    app = express(),   
    Twit = require('twit'),
    config = {
    /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */      
      twitter: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      }
    },
    T = new Twit(config.twitter);
var queries = db.get('queries')
console.log(queries)
app.use(express.static('public'));
/* You can use uptimerobot.com or a similar site to hit your /BOT_ENDPOINT to wake up your app and make your Twitter bot tweet. */
app.all("/" + process.env.BOT_ENDPOINT, function (request, response) {
/* The example below tweets out "Hello world!". */
  var resp = response;
  for(var  i = 0; i<=queries.length; i++){
      console.log(i)
      console.log(queries[i])
      //anyone here to help? lemme see - cool -
          T.get('search/tweets', { q: queries[i], count: 1, result_type: 'recent'}, function(err, data, response) {
          if (err){
            console.log("from: " + i)
            console.log(queries)
            return resp.sendStatus(500);
            console.log('Error!');
          }
          else{
            console.log(data["statuses"][0]["id_str"]);
            T.post('statuses/retweet/:id', { id: data["statuses"][0]["id_str"] }, function (err, data, response) {
              console.log(data)
              
              if (i == queries.length) return resp.sendStatus(200); // So it only responds at the end of the loop
            
            })

          }})
        
                }})
var stream = T.stream('statuses/filter', { track: 'addmyfilter', language: 'en' })
stream.on('tweet', function (tweet) {
  console.log(tweet)

    var text = tweet["text"]
    queries.push(text.slice(text.indexOf('(') +1,text.indexOf(')')));
    T.post('favorites/create', {id: tweet["id_str"]}, function(err, data, response) {
      console.log(data)
    })
  console.log(queries)
  db.set('queries', queries);
})
var listener = app.listen(process.env.PORT, function () {
  console.log('Your bot is running on port ' + listener.address().port);
});
