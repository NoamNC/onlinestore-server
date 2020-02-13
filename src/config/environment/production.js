module.exports = {
  port: process.env.PORT,
  secret: "gwecg782g87fgiu",
  db: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds053428.mlab.com:53428/heroku_q8w8x7x8`
};
