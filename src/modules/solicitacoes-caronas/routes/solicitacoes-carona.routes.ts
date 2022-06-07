import { Router } from 'express';

import { DeleteSolicitacaoController } from '../useCases/deleteSolicitacao/deleteSolicitacao.controller';
import { AceitarRecusarCaronaController } from '../useCases/aceitarRecusarCarona/aceitarRecusarCarona.controller';
import { ShoSolicitacoesPassageiroController } from '../useCases/showSolicitacoesPassageiro/showSolicitacoesPassageiro.controller';
import { ShoSolicitacoesMotoristaController } from '../useCases/showSolicitacoesMotorista/showSolicitacoesMotorista.controller';

import { auth } from '../../../middleware/login';
import { SolicitarCaronaController } from '../useCases/solicitarCarona/solicitarCarona.controller';

const solicitarCaronaController = new SolicitarCaronaController();
const aceitarRecusarCaronaController = new AceitarRecusarCaronaController();
const deleteSolicitacaoController = new DeleteSolicitacaoController();

const showSolicitacoesCaronaMotoristaController= new ShoSolicitacoesMotoristaController();
const showSolicitacoesCaronaPassageiroController= new ShoSolicitacoesPassageiroController();

const SolicitacoesCaronaRoutes = Router();

SolicitacoesCaronaRoutes.post('/',auth, solicitarCaronaController.handle);
SolicitacoesCaronaRoutes.put('/:_id',auth, aceitarRecusarCaronaController.handle);
SolicitacoesCaronaRoutes.delete('/:_id',auth, deleteSolicitacaoController.handle);
SolicitacoesCaronaRoutes.get('/motorista/:motorista',auth, showSolicitacoesCaronaMotoristaController.handle);
SolicitacoesCaronaRoutes.get('/passageiro/:passageiro',auth, showSolicitacoesCaronaPassageiroController.handle);

export { SolicitacoesCaronaRoutes };
