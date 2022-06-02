import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCaronaUseCase } from './listCarona.useCase';

class ListCaronaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCaronaUseCase = container.resolve(ListCaronaUseCase);
    const carona = await listCaronaUseCase.execute();
    return response.status(200).json({ carona: carona });
  }
}

export { ListCaronaController };
