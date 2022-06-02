import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsuarioUseCase } from './listUsuario.useCase';

class ListUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsuarioUseCase = container.resolve(ListUsuarioUseCase);
    const Usuario = await listUsuarioUseCase.execute();
    return response.status(200).json({ usuario: Usuario });
  }
}

export { ListUsuarioController };
