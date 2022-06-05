import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteSolicitacaoUseCase } from './deleteSolicitacao.useCase';


class DeleteSolicitacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const deleteSolicitacaoUseCaseUseCase = container.resolve(DeleteSolicitacaoUseCase);
    await deleteSolicitacaoUseCaseUseCase.execute(_id);
    return response
      .status(200)
      .json({ message: `Solicitacao ${_id} removida com sucesso` });
  }
}

export { DeleteSolicitacaoController };
