import { Document } from 'mongoose';
import { Status } from '../../../ValueObjects/EnumStatus';

interface ISolicitacao extends Document {
  _id?: string;
  idCarona: string,
  idPassageiro: string,
  motorista: string,
  situacao: Status
}

export { ISolicitacao };
