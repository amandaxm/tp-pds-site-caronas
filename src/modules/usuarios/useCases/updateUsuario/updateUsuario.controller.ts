import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { UpdateUsuarioUseCase } from './updateUsuario.useCase';

class UpdateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const { id,
      nome,
      email,
      senha,
      ePassageiro,
      eMotorista } = request.body;

    if (nome == null || nome == undefined)
      throw new AppError('Nome é obrigatório');

    if (senha == null || senha == undefined)
      throw new AppError('Senha obrigatória');

    if (email == null || email == undefined)
      throw new AppError('Email obrigatório');

    if (eMotorista == null || eMotorista == undefined)
      throw new AppError('Flag eMotorista obrigatória');

    if (ePassageiro == null || ePassageiro == undefined)
      throw new AppError('Flag ePassageiro obrigatória');

    const updateUsuarioUseCase = container.resolve(UpdateUsuarioUseCase);
    const usuario = await updateUsuarioUseCase.execute({
    id,
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
    });
    return response.status(200).json({ usuario: usuario });
  }
}

export { UpdateUsuarioController };
