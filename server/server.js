const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api')
const PORT =3000;
const cors = require('cors')
const app = express();
app.use(cors({
    origin: '*'
}));
app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

app.use('/api',api);

app.get('/', function(req,res){
    res.send("Hello from server");
    //alert('hello from server');
});

app.listen(PORT,function(){
 console.log("Server is running on " + PORT);
});