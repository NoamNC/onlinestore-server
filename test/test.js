const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../src/server");
const Category = require("../src/models/category");
const User = require("../src/models/user");

chai.use(chaiHttp);

describe("categories", () => {
  beforeEach(done => {
    Category.deleteMany({}).then(() => done());
  });

  it("getAll", done => {
    chai
      .request(app)
      .get("/api/category")
      .then(response => {
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.equal(0);
        done();
      })
      .catch(err => {
        throw err;
      });
  }),
    it("create", done => {
      const categoryName = "electronics";
      chai
        .request(app)
        .put("/api/category")
        .send({ title: categoryName })
        .then(res1 => {
          expect(res1).to.have.status(201);
          expect(res1.body.title).to.be.equal(categoryName);
          chai
            .request(app)
            .get("/api/category")
            .then(res2 => {
              expect(res2.body).to.an("array");
              expect(res2.body.length).to.equal(1);
              expect(res2.body[0].title).to.equal(categoryName);
              done();
            });
        })
        .catch(err => {
          throw err;
        });
    });
});

describe("user", () => {
  beforeEach(done => {
    User.deleteMany({}).then(() => done());
  });

  it("getAll", done => {
    chai
      .request(app)
      .get("/api/user")
      .then(response => {
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.equal(0);
        done();
      })
      .catch(err => {
        throw err;
      });
  }),
    it("create", done => {
      const categoryName = "electronics";
      chai
        .request(app)
        .put("/api/category")
        .send({ title: categoryName })
        .then(res1 => {
          expect(res1).to.have.status(201);
          expect(res1.body.title).to.be.equal(categoryName);
          chai
            .request(app)
            .get("/api/category")
            .then(res2 => {
              expect(res2.body).to.an("array");
              expect(res2.body.length).to.equal(1);
              expect(res2.body[0].title).to.equal(categoryName);
              done();
            });
        })
        .catch(err => {
          throw err;
        });
    });
});
