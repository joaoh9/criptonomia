const { Router } = require("express");

const router = new Router();

function sum(req, res) {
  const { a, b } = req.body;
  const soma = a + b;

  if (a == undefined || b == undefined || soma == undefined) {
    return res.status(404).json({ message: "Formatação dos dados recebida com erro" });
  }

  return res.status(200).json({ soma });
}

function divide(req, res) {
  const { a, b } = req.body;
  const divisao = a / b;

  if (a == undefined || b == undefined || divisao == undefined) {
    return res.status(404).json({ message: "Formatação dos dados recebida com erro" });
  }
  return res.status(200).json({ divisao });
}

router.post("/sum", sum);
//router.get("/soma", sum);
router.post("/divide", divide);

exports.router = router;
