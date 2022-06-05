import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../error/AppError';
import { IUsuario } from '../../models/interface/usuario';
import {
  ICriarUsuarioDTO,
  IUsuarioRepository,
} from '../../repositories/interface/IUsuarioRepository';

@injectable()
class CriarUsuarioUseCase {
  constructor(
    @inject('UsuarioRepository')
    private UsuarioRepository: IUsuarioRepository,
  ) {}

  async execute({
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
  }: ICriarUsuarioDTO): Promise<IUsuario> {
    const user = await this.UsuarioRepository.getByEmail(email);
    if (user) throw new AppError('Usuário já existe, favor fazer o login');
    const usuario = await this.UsuarioRepository.create({
      nome,
      email,
      senha,
      ePassageiro,
      eMotorista
    });
    return usuario;
  }
}

export { CriarUsuarioUseCase };
