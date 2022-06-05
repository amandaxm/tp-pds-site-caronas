import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import * as bcrypt from 'bcrypt'
import { CriarUsuarioUseCase } from './createUsuario.useCase';

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
    return response.status(201).json({ usuario: result });
  }
}
  
  
export { CriarUsuarioController };




