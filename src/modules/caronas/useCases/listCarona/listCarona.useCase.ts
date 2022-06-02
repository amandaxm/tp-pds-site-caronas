import { inject, injectable } from 'tsyringe';

import { ICarona } from '../../models/interface/carona';
import { ICaronaRepository } from '../../repositories/interface/ICaronaRepository';

@injectable()
class ListCaronaUseCase {
  constructor(
    @inject('CaronaRepository')
    private repository: ICaronaRepository,
  ) {}
  async execute(): Promise<ICarona[]> {
    return await this.repository.list();
  }
}

export { ListCaronaUseCase };
