import { IPassageiroDTO } from "./passageiros.dto";

interface IAtualizarCaronaDTO {
  id: string,
  enderecoDestino: String,
  enderecoSaida: String,
  dataHorarioSaida: Date,
  ativa: Boolean,
  vagasOfertadas:Number,
  vagasDisponiveis: Number,
  veiculo: string,
  valor: DoubleRange,
  passageiros: IPassageiroDTO[]
}
export { IAtualizarCaronaDTO };
