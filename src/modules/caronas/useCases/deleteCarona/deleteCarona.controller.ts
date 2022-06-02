import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCaronaUseCase } from './deleteCarona.useCase';

class DeleteCaronaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const deleteCaronaUseCase = container.resolve(DeleteCaronaUseCase);
    await deleteCaronaUseCase.execute(_id);
    return response
      .status(200)
      .json({ message: `Carona ${_id} removida com sucesso` });
  }
}

export { DeleteCaronaController };
