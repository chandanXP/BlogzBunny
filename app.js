const express = require("express");
const path = require("path"); 
const app = express();
var router = express.Router();
const port = 8000;

// EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files
app.use('/public', express.static('public')) // For serving static files

app.use(express.urlencoded({extended : false}));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { } 
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.get('/about_us', (req, res)=>{ 
    const params = { }
    res.status(200).render('about_us.pug', params);
})

app.get('/my_story', (req, res)=>{ 
    const params = { }
    res.status(200).render('about_us_2.pug', params);
})

app.get('/404blog_source_code', (req, res)=>{ 
    const params = { }
    res.status(200).render('about_us_3.pug', params);
})
app.get('/login', (req, res)=>{ 
    const params = { }
    res.status(200).render('login.pug', params);//serve login hbs file 
})

app.get('/signup', (req, res)=>{ 
      const params = { }
      res.status(200).render('signup.pug', params);
     
})

app.get('/bankingApp', (req, res)=>{ 
  const params = { }
  res.status(200).render('bankingApp.pug', params);
   
})
 
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

module.exports = app;
 