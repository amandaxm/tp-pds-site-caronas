import { IPassageiroDTO } from "./passageiros.dto";

interface IAtualizarCaronaDTO {
  id: String,
  enderecoDestino: String,
  enderecoSaida: String,
  dataHorarioSaida: Date,
  ativa: Boolean,
  vagasOfertadas:Number,
  vagasDisponiveis: Number,
  veiculo: String,
  valor: String,
  passageiros: IPassageiroDTO[]
}
export { IAtualizarCaronaDTO };
