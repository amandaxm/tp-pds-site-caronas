import { Status } from './../../ValueObjects/EnumStatus';
interface ISolicitacaoDTO {
  carona: string,
  passageiro: string
  situacao: Status,
  motorista: string
}

export { ISolicitacaoDTO };
