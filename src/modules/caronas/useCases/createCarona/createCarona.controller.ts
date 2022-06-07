import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { CriarCaronaUseCase } from './createCarona.useCase';
import { AppError } from '../../../../error/AppError';

class CreateCaronaController {
  async handle(request: Request, response: Response, next): Promise<Response> {
    const { motorista,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor
    } = request.body;

    if (motorista == null || motorista == undefined)
      throw new AppError('Motorista é obrigatório');

    if (enderecoDestino == null || enderecoDestino == undefined)
      throw new AppError('Endereço destino é obrigatório');

    if (enderecoSaida == null || enderecoSaida == undefined)
      throw new AppError('Endereço origem é obrigatório');

    if (dataHorarioSaida == null || dataHorarioSaida == undefined)
      throw new AppError('Data e hora de saída é obrigatória');

    if (vagasDisponiveis == null || vagasDisponiveis == undefined)
      throw new AppError('Número vagas disponíveis é obrigatório');

    if (vagasOfertadas == null || vagasOfertadas == undefined)
      throw new AppError('Número vagas ofertadas é obrigatório');

    if (veiculo == null || veiculo == undefined)
      throw new AppError('Veículo é obrigatório');

    if (valor == null || valor == undefined)
      throw new AppError('Valor é obrigatório');
    
    if (ativa == null || ativa == undefined)
      throw new AppError('Status carona (ativa) é obrigatório');

    const createCaronaUseCase = container.resolve(CriarCaronaUseCase);

    const result = await createCaronaUseCase.execute({
      motorista,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor
    });
    return response.status(201).json({ carona: result });
  }
}

export { CreateCaronaController };




