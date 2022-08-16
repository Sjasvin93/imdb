//including the express library
const express = require('express');

//initializing the express
const app = express();

//setting the port number
const port = process.env.PORT || 8000;

//setting the path for the views 'ejs'
const path = require('path');

//Setting up the ejs view engine
app.set('view engine', 'ejs');

//joining the path of current directory with views
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));



//rendering the home page
app.get('/', async function(req,res){    
    return res.render('home',
        {
            title : "IMDB",
        }
    );
});

//rendering the favourite movies page
app.get('/favourites', async function(req,res){    
    return res.render('favourites',
        {
            title : "Favourite Movies",
        }
    );
});

//making the app listener for the server
app.listen(port , function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});