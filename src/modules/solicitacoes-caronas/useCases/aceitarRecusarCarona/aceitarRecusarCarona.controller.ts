import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { Status } from '../../../ValueObjects/EnumStatus';
import { AceitarRecusarCaronaUseCase } from './aceitarRecusarCarona.useCase';
import { UpdateCaronaUseCase } from '../../../caronas/useCases/updateCarona/updateCarona.useCase';

class AceitarRecusarCaronaController {
  async handle(request: Request, response: Response, next): Promise<Response> {
    const {
      situacao,
      idSolicitacao } = request.body;


    const aceitarRecusarCaronaUseCase = container.resolve(AceitarRecusarCaronaUseCase);

    var situacaoEnum: Status = Status[situacao as keyof typeof Status];

    const result = await aceitarRecusarCaronaUseCase.execute({
      situacao: situacaoEnum,
      idSolicitacao
    });
    return response.status(201).json({ solicitacao: result });


  }
}

export { AceitarRecusarCaronaController };




