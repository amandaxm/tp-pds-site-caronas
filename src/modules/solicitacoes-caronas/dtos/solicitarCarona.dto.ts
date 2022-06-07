import { Status } from './../../ValueObjects/EnumStatus';
interface ISolicitarCaronaDTO {
  carona: string
  passageiro: string,
  situacao: Status,
  motorista: string
}

export { ISolicitarCaronaDTO };
