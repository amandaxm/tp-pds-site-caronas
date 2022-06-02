import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowUsuarioUseCase } from './showUsuario.useCase';

class ShowUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const showUsuarioUseCase = container.resolve(ShowUsuarioUseCase);
    const Usuario = await showUsuarioUseCase.execute(_id);
    return response.status(200).json({ usuario: Usuario });
  }
}

export { ShowUsuarioController };
