const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const projectRoutes = require('./routes/projectRoutes');
// Create the server with Express and PORT
const app = express();
const PORT = 8080;

// Connection String to MongoDB
const dbURI = 'mongodb+srv://penguin:xn140839@cluster0.uk88p.mongodb.net/rep-proj?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('The application started');
        app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
    })
    .catch((err) => console.log(err));

// "Hello from homepage" is shown  when visiting http://localhost:8080/
app.get('/', (req, res) => res.send('Hello from homepage.'));

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());

// project routes
app.use('/projects', projectRoutes);
