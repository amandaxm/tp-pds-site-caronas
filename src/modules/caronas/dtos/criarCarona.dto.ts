interface ICriarCaronaDTO {
  motorista: string,
  enderecoDestino: string,
  enderecoSaida: string,
  dataHorarioSaida: Date,
  ativa: Boolean,
  vagasOfertadas:Number,
  vagasDisponiveis: Number,
  veiculo: string,
  valor: string
}

export { ICriarCaronaDTO };
