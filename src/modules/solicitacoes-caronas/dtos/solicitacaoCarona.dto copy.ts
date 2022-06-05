import { Status } from './../../ValueObjects/EnumStatus';
interface ISolicitacaoDTO {
  idCarona: string,
  idPassageiro: string
  situacao: Status,
  idMotorista: string
}

export { ISolicitacaoDTO };
