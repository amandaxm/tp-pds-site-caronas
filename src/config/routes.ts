import { Router } from 'express';

import { usuariosRoutes } from '../modules/usuarios/routes/usuario.routes';
import { CaronaRoutes } from '../modules/caronas/routes/carona.routes';

const routes = Router();

routes.use('/usuarios', usuariosRoutes);
routes.use('/carona', CaronaRoutes);

export { routes };
