import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowSolicitacoesPassageiroUseCase } from './showSolicitacoesPassageiro.useCase';

class ShoSolicitacoesPassageiroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { passageiro } = request.params;
    const shoSolicitacoesUsuarioCase = container.resolve(ShowSolicitacoesPassageiroUseCase);
    const solicitacoes= await shoSolicitacoesUsuarioCase.execute(passageiro);
    return response.status(200).json({ solicitacoesPassageiro: solicitacoes });
  }
}

export { ShoSolicitacoesPassageiroController };
