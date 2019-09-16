const config = require('./config/environment/index');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.db.address}/${config.db.name}`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erroe:'));
db.once('open',()=>{
    console.log('3. connected to DataBase');
});
 
