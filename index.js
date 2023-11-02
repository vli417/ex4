const express = require('express'); //assigning value of express package to variable express

const app = express(); //express is the initiated function 

const port = 4000;

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

app.use(express.static('public'));

app.use('/', indexRoute);
app.use('/about', aboutRoute);
/*
app.get('/', (req, res) => {
    res.send('Hello World!')
  });
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });



  
