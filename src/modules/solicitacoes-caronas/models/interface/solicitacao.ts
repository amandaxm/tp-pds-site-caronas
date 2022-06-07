import { Document } from 'mongoose';
import { Status } from '../../../ValueObjects/EnumStatus';

interface ISolicitacao extends Document {
  _id?: string;
  carona: string,
  passageiro: string,
  motorista: string,
  situacao: Status
}

export { ISolicitacao };
