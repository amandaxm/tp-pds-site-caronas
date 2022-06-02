import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ICarona } from '../../models/interface/carona';
import { ICaronaRepository } from '../../repositories/interface/ICaronaRepository';

@injectable()
class ShowCaronaUseCase {
  constructor(
    @inject('CaronaRepository')
    private repository: ICaronaRepository,
  ) {}

  async execute(_id: string): Promise<ICarona> {
    const caronaExists = await this.repository.getById(_id);
    if (!caronaExists) throw new AppError('Carona não encontrada');
    return await this.repository.getById(_id);
  }
}

export { ShowCaronaUseCase };
