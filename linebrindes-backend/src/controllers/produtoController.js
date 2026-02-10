const Produto = require("../models/Produto");

exports.criarProduto = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

exports.listarProdutos = async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
};

exports.buscarProduto = async (req, res) => {
  const produto = await Produto.findById(req.params.id);
  res.json(produto);
};
