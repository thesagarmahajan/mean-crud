const express = require('express');
var app = express();
const urlencoded = require('./controllers/urlencoded_ctrl.js');
// const raw = require('./controllers/raw_ctrl.js');
// const formdata = require('./controllers/formdata_ctrl.js');
const all_routes = require('./controllers');

app.listen(5050, function(){});
app.use("/users", urlencoded);
// app.use("/users", raw);
// app.use("/users", formdata);
app.use("/", all_routes);