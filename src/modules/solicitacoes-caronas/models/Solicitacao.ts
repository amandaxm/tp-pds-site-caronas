import mongoose, { Schema } from 'mongoose';
import { ISolicitacao } from './interface/solicitacao';


const SolicitacaoSchema: Schema = new Schema(
  {
    idCarona: {
      type: String,
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
