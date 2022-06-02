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
