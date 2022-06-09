/**
 * rotas da parte da interação da api com a tabela de clientes
 */

const router = require('express-promise-router')();
const clienteController = require('../controllers/cliente.controller');

// Definindo as rotas do CRUD

router.post('/clientes', clienteController.createCliente);
router.put('/clientes', clienteController.updateCliente);
router.get('/clientes', clienteController.listAllClientes);
router.get('/clientes/:id', clienteController.findClienteById);
router.delete('/clientes/:id', clienteController.removeClienteById);

module.exports = router;
