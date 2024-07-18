import express from 'express'
import autorController from '../controllers/autorController.js'

const routes = express.Router()

routes.get('/autores', autorController.listarAutores)
routes.get('/autores/:id', autorController.listarAutoresPorId)
routes.post('/autores', autorController.cadastrarAutores)
routes.put('/autores/:id', autorController.atualizarAutor)
routes.delete('/autores/:id', autorController.excluirAutor)

export default routes