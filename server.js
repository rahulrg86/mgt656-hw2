var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! This is a lot of fun!');
});

app.get('/nickname', function(request, response){
    response.send('gleaming boar');
});

app.listen(process.env.PORT || 4000);
