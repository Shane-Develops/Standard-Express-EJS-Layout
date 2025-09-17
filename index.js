require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'layouts'));

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

// Importing Different Files.
const routes = require('./private/routes');
app.use('/', routes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
