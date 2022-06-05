import { inject, injectable } from 'tsyringe';

import { ISolicitacoesCaronaRepository } from '../../repositories/interface/ISolicitacaoRepository';
import { ISolicitacao } from '../../models/interface/solicitacao';

@injectable()
class ShowSolicitacoesPassageiroUseCase {
  constructor(
    @inject('SolicitacoesCaronaRepository')
    private repository: ISolicitacoesCaronaRepository,
  ) {}

  async execute(idPassageiro: string): Promise<ISolicitacao[]> {
  
    return await this.repository.getCaronasSolicitadasPassageiro(idPassageiro);
  }
}

export { ShowSolicitacoesPassageiroUseCase };
