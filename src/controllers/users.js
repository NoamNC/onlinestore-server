const User = require('../models/user');

module.exports = {
  all: (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err=>res.status(500).json(err));
  },
  create: (req, res) => {
    console.log(req.body);
      const user = new User(req.body);
      user.save()
      .then(user => res.status(201).json(err))
      .catch(err=>res.status(400).json(err));
  }
};
