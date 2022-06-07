import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import 'dotenv/config';
import { AppError } from '../../../../error/AppError';
import { IUsuario } from '../../models/interface/usuario';

import { UsuarioRepository } from '../../repositories/usuario-repository';

class LoginUsuarioUseCase {

  async execute({
    email,
    senha
  }: any): Promise<{ token: string, user: IUsuario }> {

    const usuarioRepository = new UsuarioRepository();
    const user = await usuarioRepository.getByEmail(email);

    if (!user)
      throw new AppError("Usuário não encontrado!");

    const checkPassword = await bcrypt.compare(senha.toString(), user.senha.toString());

    if (!checkPassword)
      throw new AppError("Senha inválida");


    try {
      const secret = process.env.SECRET;

      const token = jwt.sign({
        id: user._id,
      },
        secret
      );

      return { token: token, user: user };

    } catch (error) {
      throw new AppError("Erro ao autenticar")
    }
  }

}

export { LoginUsuarioUseCase };
