import { inject, injectable } from 'tsyringe';

import { ICarona } from '../../models/interface/carona';
import { ICaronaRepository } from '../../repositories/interface/ICaronaRepository';

@injectable()
class ShowCaronaPassageiroUseCase {
  constructor(
    @inject('CaronaRepository')
    private repository: ICaronaRepository,
  ) {}

  async execute(idPassageiro: string): Promise<ICarona[]> {
  
    return await this.repository.getCaronasPassageiro(idPassageiro);
  }
}

export { ShowCaronaPassageiroUseCase };
