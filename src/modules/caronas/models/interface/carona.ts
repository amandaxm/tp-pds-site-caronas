import { Document } from 'mongoose';
import { IUsuario } from '../../../usuarios/models/interface/usuario';
import { UsuarioRepository } from '../../../usuarios/repositories/usuario-repository';
import { IPassageiroDTO } from "../../dtos/passageiros.dto"

interface ICarona extends Document {
  _id?: string;
  motorista: String,
  enderecoDestino: String,
  enderecoSaida: String,
  dataHorarioSaida: Date,
  ativa: Boolean,
  vagasOfertadas: Number,
  vagasDisponiveis: Number,
  veiculo: string,
  valor: String,
  passageiros: IPassageiroDTO[]
}

export { ICarona };
