const { Router } = require("express");

const router = new Router();

function sum(req, res) {
  const { a, b } = req.body;
  const soma = a + b;

  return res.status(200).json({ soma });
}

function divide(req, res) {
  const { a, b } = req.body;
  const divisao = a / b;

  return res.status(200).json({ divisao });
}

router.post("/sum", sum);
//router.get("/soma", sum);
router.post("/divide", divide);

exports.router = router;
