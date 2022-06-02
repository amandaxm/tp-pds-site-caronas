import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCaronaUseCase } from './showCarona.useCase';

class ShowCaronaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const showCaronaUseCase = container.resolve(ShowCaronaUseCase);
    const carona = await showCaronaUseCase.execute(_id);
    return response.status(200).json({ carona: carona });
  }
}

export { ShowCaronaController };
