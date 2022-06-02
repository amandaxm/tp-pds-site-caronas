import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IUsuario } from '../../models/interface/usuario';
import {
  IUsuarioRepository,
  IAtualizarUsuarioDTO,
} from '../../repositories/interface/IUsuarioRepository';

@injectable()
class UpdateUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private UsuarioRepository: IUsuarioRepository,
  ) {}

  async execute({
    id,
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
  }: IAtualizarUsuarioDTO): Promise<IUsuario> {
    const UsuarioExists = await this.UsuarioRepository.getById(id);
    if (!UsuarioExists) throw new AppError('Usuario not found');
    const usuario = await this.UsuarioRepository.update({
    id,
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista    });
    return usuario;
  }
}

export { UpdateUsuarioUseCase };
