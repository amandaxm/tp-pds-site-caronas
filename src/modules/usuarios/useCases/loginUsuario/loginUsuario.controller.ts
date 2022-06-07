import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { LoginUsuarioUseCase } from './loginUsuario.useCase';
import { AppError } from '../../../../error/AppError';

class LoginUsuarioController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const {
      email,
      senha,
    } = request.body;
  
  if (senha == null || senha == undefined)
    throw new AppError('Senha obrigatória');

  if (email == null || email == undefined)
    throw new AppError('Email obrigatório');
    
    const loginUsuarioUseCase = container.resolve(LoginUsuarioUseCase);
    
    const resp = await loginUsuarioUseCase.execute({
      email,
      senha
    });

    return response.status(201).json(resp);
  }
}

export { LoginUsuarioController };




