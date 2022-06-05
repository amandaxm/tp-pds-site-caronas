import { Document } from 'mongoose';
import { Status } from '../../../ValueObjects/EnumStatus';

interface ISolicitacao extends Document {
  _id?: string;
  idCarona: string,
  idPassageiro: string,
  idMotorista: string,
  situacao: Status
}

export { ISolicitacao };
