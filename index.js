const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 9000;
app.use(express.json());
/* Template Engine */
app.set('view engine', 'ejs');
app.set('views', 'views');

/* Body Parser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/* Routes */
const studentrouter = require("./routes/students");

app.get('/', function (req, res) {
    res.redirect('/students');
});

app.use('/students', studentrouter)


const errController = require('./controllers/error-controller');
app.use(errController.show404Page);

app.listen(port, () => {
    console.log('Server started and running on: ', port);
})

