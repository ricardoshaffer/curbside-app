const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/itemsListings";// || "Add_YOUR_MONGODB_URL_HERE"; <<< remove the '/// and add oyour code
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("Successfully connected.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

  app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
