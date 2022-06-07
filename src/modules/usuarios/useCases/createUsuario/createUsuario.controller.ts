import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import * as bcrypt from 'bcrypt'
import { CriarUsuarioUseCase } from './createUsuario.useCase';
import { LoginUsuarioUseCase } from '../loginUsuario/loginUsuario.useCase';

class CriarUsuarioController {
  async handle(request: Request, response: Response, next): Promise<Response> {
    const { nome,
      email,
      senha,
      ePassageiro,
      eMotorista,
    } = request.body;

    const createUsuarioUseCase = container.resolve(CriarUsuarioUseCase);
    const passwordHash = await bcrypt.hash(senha, 12);

    const result = await createUsuarioUseCase.execute({
      nome,
      email,
      senha: passwordHash,
      ePassageiro,
      eMotorista
    });

    const loginUsuarioUseCase = container.resolve(LoginUsuarioUseCase);

    // login e token
    const resp = await loginUsuarioUseCase.execute({
      email,
      senha
    });

    return response.status(201).json(resp);
  }
}


export { CriarUsuarioController };




