import { ICriarUsuarioDTO } from '../../dtos/criarUsuario.dto';
import { IAtualizarUsuarioDTO } from '../../dtos/updateUsuario.dto';
import { IUsuario } from '../../models/interface/usuario';

interface IUsuarioRepository {
  create({  nome,
    email,
    senha,
    ePassageiro,
    eMotorista,
     }: ICriarUsuarioDTO): Promise<IUsuario>;
  update({
    id,
    nome,
    email,
    senha,
    ePassageiro,
    eMotorista
  }: IAtualizarUsuarioDTO): Promise<IUsuario>;
  delete(_id: string): Promise<void>;
  list(): Promise<IUsuario[]>;
  getById(_id: string): Promise<IUsuario>;
  getByName(name: string): Promise<IUsuario>;
  getByEmail(email: string): Promise<IUsuario>;

}

export { ICriarUsuarioDTO, IUsuarioRepository, IAtualizarUsuarioDTO };
