import Usuario from '../models/Usuario';
import {
  ICriarUsuarioDTO,
  IUsuarioRepository,
  IAtualizarUsuarioDTO,
} from './interface/IUsuarioRepository';
import { IUsuario } from '../models/interface/usuario';

class UsuarioRepository implements IUsuarioRepository {
  async create({
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
  }: ICriarUsuarioDTO): Promise<IUsuario> {
    const usuario = await Usuario.create({
      nome,
      email,
      senha,
      ePassageiro,
      eMotorista
    });
    return usuario;
  }

  async update({
    id,
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
  }: IAtualizarUsuarioDTO): Promise<IUsuario> {
    const usuario = await Usuario.findByIdAndUpdate(
      { _id: id },
      {
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
      },
      { new: true },
    );
    return usuario;
  }

  async delete(_id: string): Promise<void> {
    await Usuario.findByIdAndDelete({ _id });
  }

  async list(): Promise<IUsuario[]> {
    return await Usuario.find();
  }

  async getById(id: string): Promise<IUsuario> {
    return await Usuario.findById(id);
  }

  async getByName(name: string): Promise<IUsuario> {
    return await Usuario.findOne({ name });
  }

  async getByEmail(email: string): Promise<IUsuario> {
 
    return await Usuario.findOne({ email });
  }
}

export { UsuarioRepository };
