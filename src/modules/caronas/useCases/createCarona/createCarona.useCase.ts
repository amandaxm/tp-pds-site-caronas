import { Status } from './../../../ValueObjects/EnumStatus';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ICarona } from '../../models/interface/carona';
import { IPassageiroDTO } from '../../dtos/passageiros.dto';
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
    motoristaId,
    enderecoDestino,
    enderecoSaida,
    dataHorarioSaida,
    ativa,
    vagasOfertadas,
    vagasDisponiveis,
    veiculo,
    valor,
    passageiros
  }: ICriarCaronaDTO): Promise<ICarona> {

    try{
    const carona = await this.CaronaRepository.create({
      motoristaId,
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
  }catch(err){
    console.log(err)
  }
  }
}

export { CriarCaronaUseCase };
