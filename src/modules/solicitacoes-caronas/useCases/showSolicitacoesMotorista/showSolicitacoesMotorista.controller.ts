import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowSolicitacoesMotoristaUseCase } from './showSolicitacoesMotorista.useCase';

class ShoSolicitacoesMotoristaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idMotorista } = request.params;
    const shoSolicitacoesUsuarioCase = container.resolve(ShowSolicitacoesMotoristaUseCase);
    const solicitacoes= await shoSolicitacoesUsuarioCase.execute(idMotorista);
    return response.status(200).json({ solicitacoesMotorista: solicitacoes });
  }
}

export { ShoSolicitacoesMotoristaController };
