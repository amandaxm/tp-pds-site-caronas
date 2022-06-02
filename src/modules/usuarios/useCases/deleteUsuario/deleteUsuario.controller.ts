import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUsuarioUseCase } from './deleteUsuario.useCase';

class DeleteUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);
    await deleteUsuarioUseCase.execute(_id);
    return response
      .status(200)
      .json({ message: `Usuario ${_id} removido com sucesso` });
  }
}

export { DeleteUsuarioController };
