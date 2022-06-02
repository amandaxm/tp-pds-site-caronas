import { Document } from 'mongoose';

interface IUsuario extends Document {
  _id?: string;
  nome: String,
  email: String,
  senha: String,
  ePassageiro: Boolean,
  eMotorista: Boolean,
}

export { IUsuario };
