import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ICarona } from '../../models/interface/carona';
import {
  ICaronaRepository,
  IAtualizarCaronaDTO,
} from '../../repositories/interface/ICaronaRepository';

@injectable()
class UpdateCaronaUseCase {
  constructor(
    @inject('CaronaRepository')
    private CaronaRepository: ICaronaRepository,
  ) {}

  async execute({
    id,
    enderecoDestino,
    enderecoSaida,
    dataHorarioSaida,
    ativa,
    vagasOfertadas,
    vagasDisponiveis,
    veiculo,
    valor,
    passageiros
  }: IAtualizarCaronaDTO): Promise<ICarona> {
    const CaronaExists = await this.CaronaRepository.getById(id);
    if (!CaronaExists) throw new AppError('Carona não encontrada');
    const carona = await this.CaronaRepository.update({
      id,
    enderecoDestino,
    enderecoSaida,
    dataHorarioSaida,
    ativa,
    vagasOfertadas,
    vagasDisponiveis,
    veiculo,
    valor,
    passageiros
    });
    return carona;
  }
}

export { UpdateCaronaUseCase };
