import { inject, injectable } from 'tsyringe';

import { ISolicitacao } from '../../models/interface/solicitacao';
import { ISolicitacoesCaronaRepository } from '../../repositories/interface/ISolicitacaoRepository';

@injectable()
class ShowSolicitacoesMotoristaUseCase {
  constructor(
    @inject('SolicitacoesCaronaRepository')
    private repository: ISolicitacoesCaronaRepository,
  ) {}
  async execute(idMotorista: string): Promise<ISolicitacao[]> {
  
    return await this.repository.getCaronasSolicitadasMotorista(idMotorista);
  }
}

export { ShowSolicitacoesMotoristaUseCase };
