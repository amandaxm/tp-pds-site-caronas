import { container } from 'tsyringe';

import { IUsuarioRepository } from '../../modules/usuarios/repositories/interface/IUsuarioRepository';
import { UsuarioRepository } from '../../modules/usuarios/repositories/usuario-repository';
import { ICaronaRepository } from '../../modules/caronas/repositories/interface/ICaronaRepository';
import { CaronaRepository } from '../../modules/caronas/repositories/carona-repository';

container.registerSingleton<IUsuarioRepository>(
  'UsuarioRepository',
  UsuarioRepository,
);

container.registerSingleton<ICaronaRepository>(
  'CaronaRepository',
  CaronaRepository,
  
);
