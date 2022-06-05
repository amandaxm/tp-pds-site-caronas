import { Router } from 'express';

import { usuariosRoutes } from '../modules/usuarios/routes/usuario.routes';
import { CaronaRoutes } from '../modules/caronas/routes/carona.routes';
import { SolicitacoesCaronaRoutes } from '../modules/solicitacoes-caronas/routes/solicitacoes-carona.routes';

const routes = Router();

routes.use('/usuarios', usuariosRoutes);
routes.use('/carona', CaronaRoutes);
routes.use('/solicitacoes-carona', SolicitacoesCaronaRoutes);

export { routes };
