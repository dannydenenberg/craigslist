const express = require('express');
const app = express();
const port = process.env.PORT || 4040;
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(express.static('public'))

app.set('view engine', 'pug')


app.get('/bik', (req, res) => {
  console.log('in bik');
  res.render('posting')
})
app.get('/', (req, res) => {
  console.log(req.cookies);
  res.render('homepage', {
    name: 'Danny'
  })
});

app.get('/d', (req, res) => {
  console.log('in d')
  res.render('d');
})

app.post('/test', (req, res) => {
  console.log(req.body);
  let {
    username,
    password
  } = req.body;

  if (username == 'dano') {
    res.cookie('name', 'popooooo');
    // res.send(`recieved your request! <br/>All good.`);
    res.redirect('/d');
  } else {
    res.render('index', {
      name: 'Julie',
    })
  }
})


// Serve application at `port` 
app.listen(port, () => {
  console.log(`✅ Serving on port ${port}`)
})