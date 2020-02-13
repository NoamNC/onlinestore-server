const config = require("./config/environment/index");
const mongoose = require("mongoose");
mongoose.connect(config.db, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("3. connected to DataBase");
});
