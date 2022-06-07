import { Status } from './../../ValueObjects/EnumStatus';
interface ISolicitarCaronaDTO {
  idCarona: string
  passageiro: string,
  situacao: Status,
  motorista: string
}

export { ISolicitarCaronaDTO };
