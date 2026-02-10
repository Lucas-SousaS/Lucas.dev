const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },

  descricao: {
    type: String
  },

  preco: {
    type: Number,
    required: true
  },

  categoria: {
    type: String
  },

  estoque: {
    type: Number,
    default: 0
  },

  imagens: [String],

  ativo: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Produto", ProdutoSchema);
