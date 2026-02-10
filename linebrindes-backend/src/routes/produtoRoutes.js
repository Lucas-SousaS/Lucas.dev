const router = require("express").Router();
const controller = require("../controllers/produtoController");

router.post("/", controller.criarProduto);
router.get("/", controller.listarProdutos);
router.get("/:id", controller.buscarProduto);

module.exports = router;
