import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { SolicitarCaronaUseCase } from './solicitarCarona.useCase';
import { Status } from '../../../ValueObjects/EnumStatus';
import { AppError } from '../../../../error/AppError';

class SolicitarCaronaController {
  async handle(request: Request, response: Response, next): Promise<Response> {
    const { idCarona,
      passageiro,
      situacao,
      motorista } = request.body;

    if (idCarona == null || idCarona == undefined)
      throw new AppError('idCarona é obrigatório');

    if (passageiro == null || passageiro == undefined)
      throw new AppError('passageiro é obrigatório');

    if (motorista == null || motorista == undefined)
      throw new AppError('motorista é obrigatório');

    if (situacao == null || situacao == undefined)
      throw new AppError('Situacao solicitação é obrigatória');

    const solicitarCaronaUseCase = container.resolve(SolicitarCaronaUseCase);

    const result = await solicitarCaronaUseCase.execute({
      idCarona,
      passageiro,
      situacao,
      motorista
    });
    return response.status(201).json({ solicitacao: result });

  }
}

export { SolicitarCaronaController };




