import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ISolicitacoesCaronaRepository } from '../../repositories/interface/ISolicitacaoRepository';

@injectable()
class DeleteSolicitacaoUseCase {
  constructor(
    @inject('SolicitacoesCaronaRepository')
    private repository: ISolicitacoesCaronaRepository,
  ) {}

  async execute(_id: string): Promise<void> {
    const SolicitacoesExists = await this.repository.getById(_id);
    if (!SolicitacoesExists) throw new AppError('Solicitacoes not found');
    await this.repository.delete(_id);
  }
}

export { DeleteSolicitacaoUseCase };
