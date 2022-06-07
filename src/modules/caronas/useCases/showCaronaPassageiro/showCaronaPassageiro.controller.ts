import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCaronaPassageiroUseCase } from './showCaronaPassageiro.useCase';

class ShowCaronaPassageiroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { passageiro } = request.params;
    const showCaronaUsuarioCase = container.resolve(ShowCaronaPassageiroUseCase);
    const caronas= await showCaronaUsuarioCase.execute(passageiro);
    return response.status(200).json({ caronasPassageiro: caronas });
  }
}

export { ShowCaronaPassageiroController };
