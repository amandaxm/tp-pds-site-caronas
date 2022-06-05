import { Document } from 'mongoose';

interface IUsuario extends Document {
  _id?: string;
  nome: string,
  email: string,
  senha: string,
  ePassageiro: Boolean,
  eMotorista: Boolean,
}

export { IUsuario };
