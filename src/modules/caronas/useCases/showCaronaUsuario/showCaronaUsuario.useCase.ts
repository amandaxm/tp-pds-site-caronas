import { inject, injectable } from 'tsyringe';

import { ICarona } from '../../models/interface/carona';
import { ICaronaRepository } from '../../repositories/interface/ICaronaRepository';

@injectable()
class ShowCaronaUsuarioUseCase {
  constructor(
    @inject('CaronaRepository')
    private repository: ICaronaRepository,
  ) {}

  async execute(motorista: string): Promise<ICarona[]> {
  
    return await this.repository.getCaronasUsuario(motorista);
  }
}

export { ShowCaronaUsuarioUseCase };
