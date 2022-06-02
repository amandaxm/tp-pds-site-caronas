import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ICaronaRepository } from '../../repositories/interface/ICaronaRepository';

@injectable()
class DeleteCaronaUseCase {
  constructor(
    @inject('CaronaRepository')
    private repository: ICaronaRepository,
  ) {}
  async execute(_id: string): Promise<void> {
    const CaronaExists = await this.repository.getById(_id);
    if (!CaronaExists) throw new AppError('Carona not found');
    await this.repository.delete(_id);
  }
}

export { DeleteCaronaUseCase };
