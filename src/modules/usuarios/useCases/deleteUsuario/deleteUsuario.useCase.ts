import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IUsuarioRepository } from '../../repositories/interface/IUsuarioRepository';

@injectable()
class DeleteUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository,
  ) {}
  async execute(_id: string): Promise<void> {
    const usuarioExists = await this.repository.getById(_id);
    if (!usuarioExists) throw new AppError('Usuario não encontrado');
    await this.repository.delete(_id);
  }
}

export { DeleteUsuarioUseCase };
