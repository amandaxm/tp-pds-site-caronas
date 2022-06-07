import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { CriarCaronaUseCase } from './createCarona.useCase';

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




