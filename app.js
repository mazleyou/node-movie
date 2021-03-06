var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8800, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));
app.use('/mp4', express.static('fileserver/output'));
