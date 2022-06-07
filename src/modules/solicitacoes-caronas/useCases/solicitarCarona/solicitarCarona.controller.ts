import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { SolicitarCaronaUseCase } from './solicitarCarona.useCase';
import { Status } from '../../../ValueObjects/EnumStatus';

class SolicitarCaronaController {
  async handle(request: Request, response: Response, next): Promise<Response> {
    const {  idCarona,
      idPassageiro,
      situacao,
    motorista } = request.body;


    const solicitarCaronaUseCase = container.resolve(SolicitarCaronaUseCase);

      const result = await solicitarCaronaUseCase.execute({
        idCarona,
        idPassageiro,
        situacao,
        motorista
      });
      return response.status(201).json({ solicitacao: result });
    
}}

export { SolicitarCaronaController };




