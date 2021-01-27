const express = require('express');
const app = express();
const path = require('path');

/**
 * Import controllers and routes
 */
const errorControllers = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const activitRoutes = require('./routes/activity');

app.set("view engine", 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(activitRoutes);
app.use(errorControllers.get404);

app.listen(3000);