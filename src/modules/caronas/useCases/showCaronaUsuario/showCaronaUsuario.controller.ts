import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCaronaUsuarioUseCase } from './showCaronaUsuario.useCase';

class ShowCaronaUsuarioUseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { motorista } = request.params;
  
    const showCaronaUsuarioCase = container.resolve(ShowCaronaUsuarioUseCase);
    const caronas= await showCaronaUsuarioCase.execute(motorista);
    return response.status(200).json({ caronas: caronas });
  }
}

export { ShowCaronaUsuarioUseController };
