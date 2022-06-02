import { Document } from 'mongoose';
import { IPassageiroDTO } from "../../dtos/passageiros.dto"

interface ICarona extends Document {
  _id?: string;
  motoristaId: String,
  enderecoDestino: String,
  enderecoSaida: String,
  dataHorarioSaida: Date,
  ativa: Boolean,
  vagasOfertadas:Number,
  vagasDisponiveis: Number,
  veiculo: string,
  valor: String,
  passageiros: IPassageiroDTO[]
}

export { ICarona };
