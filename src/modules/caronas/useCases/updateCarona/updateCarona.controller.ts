import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { UpdateCaronaUseCase } from './updateCarona.useCase';

class UpdateCaronaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const {
      id,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor,
      passageiros } = request.body;

    if (id == null || id == undefined)
      throw new AppError('Id carona é obrigatório');

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

    const updateCaronaUseCase = container.resolve(UpdateCaronaUseCase);
    const carona = await updateCaronaUseCase.execute({
      id,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor,
      passageiros
    });
    return response.status(200).json({ carona: carona });
  }
}

export { UpdateCaronaController };
