import mongoose, { Schema } from 'mongoose';

import { ICarona } from './interface/carona';

const CaronaSchema: Schema = new Schema(
  {
    motorista: {
      type: Schema.Types.ObjectId, ref: 'Usuario'
    },
    enderecoDestino: {
      type: String,
      required: true,
    },
    enderecoSaida: {
      type: String,
      required: true,
    },
    dataHorarioSaida: {
      type: Date,
      required: true,
    },
    vagasOfertadas: {
      type: Number,
      required: true,
    },
    vagasDisponiveis: {
      type: Number,
      required: true,
    },
    ativa: {
      type: Boolean,
      required: true,
    },
    veiculo: {
      type: String,
      required: true,
    },
    valor: {
      type: String,
      required: true,
    },
    passageiros: {
      type: Array,
      "default": [],
      required: false
    }
  },
);

export default mongoose.model<ICarona>('Carona', CaronaSchema);
