import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { LoginUsuarioUseCase } from './loginUsuario.useCase';

class LoginUsuarioController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const {
      email,
      senha,
    } = request.body;
    
    const loginUsuarioUseCase = container.resolve(LoginUsuarioUseCase);
    
    const resp = await loginUsuarioUseCase.execute({
      email,
      senha
    });

    return response.status(201).json(resp);
  }
}

export { LoginUsuarioController };




