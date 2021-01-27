const express = require('express');
const app = express();
const path = require('path');

/**
 * Import controllers
 */
const errorControllers = require('./controllers/error');
const activityControllers = require('./controllers/activity');

app.set("view engine", 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(activityControllers.getActivity);
app.use(errorControllers.get404);

app.listen(3000);