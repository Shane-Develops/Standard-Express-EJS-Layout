const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('pages/home', { // Which Page you are wanting to render
    layout: 'layout', // What Type of Layout are you trying to use.
    title: 'Home', // The Title of the Page
    description: 'Welcome to the homepage', // The actual description of the home-page.
    header: 'Welcome Home', // Header of the home-page.
    cssFile: '/layout.css' // Linked css file to the page.
  });
});

router.get('/signin', (req, res) => {
  res.render('pages/signin', {
    layout: 'layout',
    title: 'Sign In',
    description: 'Please sign in',
    header: 'Sign In Page',
    cssFile: '/signin.css'
  });
});

router.get('/signup', (req, res) => {
  res.render('pages/signup', {
    layout: 'layout',
    title: 'Sign Up',
    description: 'Create an account',
    header: 'Sign Up Page',
    cssFile: '/signup.css'
  });
});

router.get('/dashboard', (req, res) => {
  res.render('pages/dashboard', {
    layout: 'dashboard-layout',
    title: 'Dashboard',
    description: 'Welcome to your dashboard',
    header: 'Dashboard Overview',
    cssFile: '/layout.css'
  });
});

module.exports = router;
