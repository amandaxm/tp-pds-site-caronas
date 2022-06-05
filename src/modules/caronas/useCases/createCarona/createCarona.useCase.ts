import { Status } from './../../../ValueObjects/EnumStatus';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ICarona } from '../../models/interface/carona';
import {
  ICriarCaronaDTO,
  ICaronaRepository,
} from '../../repositories/interface/ICaronaRepository';

@injectable()
class CriarCaronaUseCase {
  constructor(
    @inject('CaronaRepository')
    private CaronaRepository: ICaronaRepository,
  ) {}

  async execute({
    idMotorista,
    enderecoDestino,
    enderecoSaida,
    dataHorarioSaida,
    ativa,
    vagasOfertadas,
    vagasDisponiveis,
    veiculo,
    valor,
  }: ICriarCaronaDTO): Promise<ICarona> {

    const carona = await this.CaronaRepository.create({
      idMotorista,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor
    });
    return carona;
 
  }
}

export { CriarCaronaUseCase };
