const express = require('express');
const path = require('path');
const app = express();

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home Page' });
});

app.get('/admin-login', (req, res) => {
  res.render('pages/includes/admin-login', { pageTitle: 'Admin Login' });
});


app.post('/admin-login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'supersecret') {
    return res.redirect('/admin-dashboard');
  }

  res.send('Invalid admin credentials');
});

app.get('/admin-dashboard', (req, res) => {
  res.render('admin-dashboard', { pageTitle: 'Admin Dashboard' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
