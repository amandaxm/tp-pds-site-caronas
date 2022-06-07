import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { SolicitarCaronaUseCase } from './solicitarCarona.useCase';
import { Status } from '../../../ValueObjects/EnumStatus';
import { AppError } from '../../../../error/AppError';

class SolicitarCaronaController {
  async handle(request: Request, response: Response, next): Promise<Response> {
    const { idCarona,
      idPassageiro,
      situacao,
      motorista } = request.body;

    if (idCarona == null || idCarona == undefined)
      throw new AppError('idCarona é obrigatório');

    if (idPassageiro == null || idPassageiro == undefined)
      throw new AppError('idPassageiro é obrigatório');

    if (motorista == null || motorista == undefined)
      throw new AppError('motorista é obrigatório');

    if (situacao == null || situacao == undefined)
      throw new AppError('Situacao solicitação é obrigatória');

    const solicitarCaronaUseCase = container.resolve(SolicitarCaronaUseCase);

    const result = await solicitarCaronaUseCase.execute({
      idCarona,
      idPassageiro,
      situacao,
      motorista
    });
    return response.status(201).json({ solicitacao: result });

  }
}

export { SolicitarCaronaController };




