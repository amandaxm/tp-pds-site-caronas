import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';

import { ISolicitacoesCaronaRepository } from '../../repositories/interface/ISolicitacaoRepository';
import { ISolicitarCaronaDTO } from '../../dtos/solicitarCarona.dto';
import { ISolicitacao } from '../../models/interface/solicitacao';
import { ICaronaRepository } from '../../../caronas/repositories/interface/ICaronaRepository';
import { ISolicitacaoDTO } from '../../dtos/solicitacaoCarona.dto copy';

@injectable()
class SolicitarCaronaUseCase {
  constructor(
    @inject('SolicitacoesCaronaRepository')
    private repository: ISolicitacoesCaronaRepository,
    @inject('CaronaRepository')
    private caronaRepository: ICaronaRepository
  ) {}

  async execute({
    carona,
    passageiro,
    situacao,
    motorista
  }: ISolicitacaoDTO): Promise<ISolicitacao> {
   
      const solicitacao = await this.repository.solicitarCarona({
        carona,
        passageiro,
        situacao,
        motorista
      });
      return solicitacao;
    
  }
}

export { SolicitarCaronaUseCase };
