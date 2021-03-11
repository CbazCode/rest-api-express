const express = require('express');
const morgan = require('morgan');
const { dbConnection } = require('./database/config.js');
const cors = require('cors');
const app = express();

dbConnection();



// Settings
app.set('PORT', 3000 || process.env.PORT);

// Middlewares

// app.use('/posts',(req, resp, next)=> {
//     console.log('Running middleware in posts');
//     next();
// })
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./routes/routes.js'));

app.listen(app.get('PORT'), () => {
    console.log(`Server in port ${app.get('PORT')}`)
})