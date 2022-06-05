import { Router } from 'express';

import { CriarUsuarioController } from '../useCases/createUsuario/createUsuario.controller';
import { LoginUsuarioController } from '../useCases/loginUsuario/loginUsuario.controller';
import { DeleteUsuarioController } from '../useCases/deleteUsuario/deleteUsuario.controller';
import { ListUsuarioController } from '../useCases/listUsuarios/listUsuario.controller';
import { ShowUsuarioController } from '../useCases/showUsuario/showUsuario.controller';
import { UpdateUsuarioController } from '../useCases/updateUsuario/updateUsuario.controller';
import { auth } from '../../../middleware/login';

const criarUsuarioController = new CriarUsuarioController();
const loginUsuarioController = new LoginUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const showUsuarioController = new ShowUsuarioController();
const listUsuariosController = new ListUsuarioController();

const usuariosRoutes = Router();

usuariosRoutes.post('/', criarUsuarioController.handle);//ok
usuariosRoutes.post('/login', loginUsuarioController.handle);//ok
usuariosRoutes.put('/:_id', auth,updateUsuarioController.handle);//ok
usuariosRoutes.delete('/:_id',auth, deleteUsuarioController.handle);//ok
usuariosRoutes.get('/:_id',auth, showUsuarioController.handle);//ok
usuariosRoutes.get('/', listUsuariosController.handle);//ok



export { usuariosRoutes };
