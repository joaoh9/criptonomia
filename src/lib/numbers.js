const axios = require("axios");

const sum = async vector => {
  let total = 0;
  for (const number of vector) {
    await axios
      .post("http://localhost:3000/api/sum", {
        a: number,
        b: total
      })
      .then(res => {
        const { soma } = res.data;
        total = soma;
      })
      .catch(err => err);
  }
  return total;
};

const average = async vector => {
  const somatorio = await sum(vector);
  const tamanho = vector.length;

  return await axios
    .post("http://localhost:3000/api/divide", {
      a: somatorio,
      b: tamanho
    })
    .then(res => {
      const { divisao } = res.data;
      return divisao;
    })
    .catch(err => err);
};

exports.sum = sum;
exports.average = average;
