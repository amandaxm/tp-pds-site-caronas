import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowSolicitacoesPassageiroUseCase } from './showSolicitacoesPassageiro.useCase';

class ShoSolicitacoesPassageiroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idPassageiro } = request.params;
    const shoSolicitacoesUsuarioCase = container.resolve(ShowSolicitacoesPassageiroUseCase);
    const solicitacoes= await shoSolicitacoesUsuarioCase.execute(idPassageiro);
    return response.status(200).json({ solicitacoesPassageiro: solicitacoes });
  }
}

export { ShoSolicitacoesPassageiroController };
