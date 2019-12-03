const { expect } = require("chai"); //destructure and take out expect
const request = require("request");

describe("Testing Routes.", () => {
  it("should return products of an array, length greater than 0", function(done) {
    request("http://localhost:3001/products", function(error, response, body) {
      const products = JSON.parse(body);
      expect(products.length).to.be.above(0);
      done();
    });
  });

  it("should return status code(200) for product's route", function(done) {
    request("http://localhost:3001/products", function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return contacts of an array, length greater than 0", function(done) {
    request("http://localhost:3001/contacts", function(error, response, body) {
      const contacts = JSON.parse(body);
      expect(contacts.length).to.be.above(0);
      done();
    });
  });

  it("should return products/category of an array, length greater than 0", function(done) {
    request("http://localhost:3001/products/productFilter/shoes", function(error, response, body) {
      const productsForShoes = JSON.parse(body);
      expect(productsForShoes.length).to.be.above(0);
      done();
    });
  });

});
