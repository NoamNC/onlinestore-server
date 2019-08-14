const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/onlinestore', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erroe:'));
db.once('open',()=>{
    console.log('3. connected to DataBase');
});
 
