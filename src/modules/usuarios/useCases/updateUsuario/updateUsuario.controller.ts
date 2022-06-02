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
    if (_id !== id) throw new AppError('Usuário id inválido');
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
