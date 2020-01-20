const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src");
const numbers = require("../src/lib/numbers");

const { expect } = chai;
chai.use(chaiHttp);

describe("Testando servidor", () => {
  it("API está ouvindo", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.hello).to.equals("Hello World!");
        done();
      });
  });
});

describe("Soma 2 números", () => {
  it("POST /soma", done => {
    chai
      .request(server)
      .post("/api/sum")
      .send({ a: 1, b: 2 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.soma).to.equals(3);
        done();
      });
  });
});

describe("Divide 2 números", () => {
  it("POST /divide", done => {
    chai
      .request(server)
      .post("/api/divide")
      .send({ a: 3, b: 2 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.divisao).to.equals(1.5);
        done();
      });
  });
});

const vector = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("Soma um vetor de inteiros", () => {
  it("Numbers sum(numbers: int[]): int", done => {
    numbers.sum(vector).then(result => {
      expect(result).to.equals(55);
      done();
    });
  });
});

describe("Retorna a média aritimética de um vetor de inteiros", () => {
  it("Numbers avg(numbers: int[]): float", done => {
    numbers.average(vector).then(result => {
      expect(result).to.equals(5);
      done();
    });
  });
});
