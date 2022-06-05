import { Status } from './../../ValueObjects/EnumStatus';
interface ISolicitarCaronaDTO {
  idCarona: string
  idPassageiro: string,
  situacao: Status,
  idMotorista: string
}

export { ISolicitarCaronaDTO };
