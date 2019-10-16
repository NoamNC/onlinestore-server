const jwt = require('jsonwebtoken');
const config = require('../environment');

module.exports = (req, res, next)=>{

    try{
        console.log(req);
    req.user = jwt.verify(req.headers.authorization, config.secret);
    }
    catch(e){
        res.status(403).send();
        return;
    }
    next();
};