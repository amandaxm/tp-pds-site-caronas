import { container } from 'tsyringe';

import { IUsuarioRepository } from '../../modules/usuarios/repositories/interface/IUsuarioRepository';
import { UsuarioRepository } from '../../modules/usuarios/repositories/usuario-repository';
import { ICaronaRepository } from '../../modules/caronas/repositories/interface/ICaronaRepository';
import { CaronaRepository } from '../../modules/caronas/repositories/carona-repository';
import { ISolicitacoesCaronaRepository } from '../../modules/solicitacoes-caronas/repositories/interface/ISolicitacaoRepository';
import { SolicitacoesCaronaRepository } from '../../modules/solicitacoes-caronas/repositories/solicitacao-carona-repository';


container.registerSingleton<ISolicitacoesCaronaRepository>(
  'SolicitacoesCaronaRepository',
  SolicitacoesCaronaRepository,
  
);
container.registerSingleton<IUsuarioRepository>(
  'UsuarioRepository',
  UsuarioRepository,
);

container.registerSingleton<ICaronaRepository>(
  'CaronaRepository',
  CaronaRepository,
  
);


