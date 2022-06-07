import { Router } from 'express';

import { CreateCaronaController } from '../useCases/createCarona/createCarona.controller';
import { DeleteCaronaController } from '../useCases/deleteCarona/deleteCarona.controller';
import { ListCaronaController } from '../useCases/listCarona/listCarona.controller';
import { ShowCaronaController } from '../useCases/showCarona/showCarona.controller';
import { UpdateCaronaController } from '../useCases/updateCarona/updateCarona.controller';
import { ShowCaronaUsuarioUseController } from '../useCases/showCaronaUsuario/showCaronaUsuario.controller';
import { ShowCaronaPassageiroController } from '../useCases/showCaronaPassageiro/showCaronaPassageiro.controller';

import { auth } from '../../../middleware/login';

const createCaronaController = new CreateCaronaController();
const updateCaronaController = new UpdateCaronaController();
const deleteCaronaController = new DeleteCaronaController();
const showCaronaController = new ShowCaronaController();
const listCaronaController = new ListCaronaController();
const showCaronaUsuarioController= new ShowCaronaUsuarioUseController();
const showCaronaPassageiroController= new ShowCaronaPassageiroController();

const CaronaRoutes = Router();

CaronaRoutes.post('/', createCaronaController.handle);
CaronaRoutes.put('/:_id',auth, updateCaronaController.handle);
CaronaRoutes.delete('/:_id',auth, deleteCaronaController.handle);
CaronaRoutes.get('/:_id',auth, showCaronaController.handle);
CaronaRoutes.get('/', listCaronaController.handle);
CaronaRoutes.get('/motorista/:motorista', showCaronaUsuarioController.handle);
CaronaRoutes.get('/passageiro/:passageiro', showCaronaPassageiroController.handle);

export { CaronaRoutes };
