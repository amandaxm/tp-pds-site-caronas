import mongoose, { Schema } from 'mongoose';
import { ISolicitacao } from './interface/solicitacao';


const SolicitacaoSchema: Schema = new Schema(
  {
    idCarona: {
      type: String,
      required: true,
    },
    idPassageiro: {
      type: String,
      required: true,
    },
     idMotorista: {
      type: String,
      required: true,
    },
    situacao: {
      type: String,
      required: true,
    },
},
);

export default mongoose.model<ISolicitacao>('Solicitacao', SolicitacaoSchema);
