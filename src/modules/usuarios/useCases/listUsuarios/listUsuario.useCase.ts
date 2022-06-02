import { inject, injectable } from 'tsyringe';

import { IUsuario } from '../../models/interface/usuario';
import { IUsuarioRepository } from '../../repositories/interface/IUsuarioRepository';

@injectable()
class ListUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private repository: IUsuarioRepository,
  ) {}
  async execute(): Promise<IUsuario[]> {
    return await this.repository.list();
  }
}

export { ListUsuarioUseCase };
