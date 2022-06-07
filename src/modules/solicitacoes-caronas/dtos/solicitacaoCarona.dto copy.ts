import { Status } from './../../ValueObjects/EnumStatus';
interface ISolicitacaoDTO {
  idCarona: string,
  passageiro: string
  situacao: Status,
  motorista: string
}

export { ISolicitacaoDTO };
