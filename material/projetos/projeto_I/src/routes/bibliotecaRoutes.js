const routes = require("express").Router();
const controller = require("../controllers/bibliotecaController");
const { tryCatchWrapper } = controller;

routes.get("/", tryCatchWrapper(controller.get));
routes.post("/", tryCatchWrapper(controller.post));
routes.get("/:id", tryCatchWrapper(controller.getById));

module.exports = routes;
