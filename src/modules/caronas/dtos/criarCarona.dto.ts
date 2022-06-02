import { IPassageiroDTO } from "./passageiros.dto"
interface ICriarCaronaDTO {
  motoristaId: String,
  enderecoDestino: String,
  enderecoSaida: String,
  dataHorarioSaida: Date,
  ativa: Boolean,
  vagasOfertadas:Number,
  vagasDisponiveis: Number,
  veiculo: string,
  valor: string,
  passageiros: IPassageiroDTO[]
}

export { ICriarCaronaDTO };
