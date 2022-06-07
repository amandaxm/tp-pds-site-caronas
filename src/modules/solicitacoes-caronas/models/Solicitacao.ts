import mongoose, { Schema } from 'mongoose';
import { ISolicitacao } from './interface/solicitacao';


const SolicitacaoSchema: Schema = new Schema(
  {
    carona: {
      type: Schema.Types.ObjectId, ref: 'Carona',
      required: true,
    },
    passageiro: {
      type: Schema.Types.ObjectId, ref: 'Usuario',
      required: true,
    },
    motorista: {
      type: Schema.Types.ObjectId, ref: 'Usuario',
      required: true,
    },
    situacao: {
      type: String,
      required: true,
    },
  },
);

export default mongoose.model<ISolicitacao>('Solicitacao', SolicitacaoSchema);
