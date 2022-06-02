import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IUsuario } from '../../models/interface/usuario';
import { IUsuarioRepository } from '../../repositories/interface/IUsuarioRepository';

@injectable()
class ShowUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository,
  ) {}

  async execute(_id: string): Promise<IUsuario> {
    const UsuarioExists = await this.repository.getById(_id);
    if (!UsuarioExists) throw new AppError('Usuario não encontrado');
    return await this.repository.getById(_id);
  }
}

export { ShowUsuarioUseCase };
