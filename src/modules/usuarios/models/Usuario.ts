import mongoose, { Schema } from 'mongoose';

import { IUsuario } from './interface/usuario';

const UsuarioSchema: Schema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    ePassageiro: {
      type: Boolean,
      required: true,
    },
    eMotorista: {
      type: Boolean,
      required: true,
    },
  },
);

export default mongoose.model<IUsuario>('Usuario', UsuarioSchema);
