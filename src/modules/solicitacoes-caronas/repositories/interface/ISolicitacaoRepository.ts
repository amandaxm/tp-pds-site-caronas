import { ISolicitacao } from '../../models/interface/solicitacao';
import { ISolicitacaoDTO } from '../../dtos/solicitacaoCarona.dto copy';
import { IAceitarRecusarCaronaDTO } from '../../dtos/aceitarRecusarCarona.dto';

interface ISolicitacoesCaronaRepository {
  solicitarCarona({   
    carona,
    passageiro,
    situacao,
    motorista
  }: ISolicitacaoDTO): Promise<ISolicitacao>;

  aceitarRecusarSolicitacaoCarona({
    idSolicitacao,
    situacao
  }: IAceitarRecusarCaronaDTO): Promise<ISolicitacao>;
  delete(_id: string): Promise<void>;
  getCaronasSolicitadasMotorista(motorista: string): Promise<ISolicitacao[]>;
  getCaronasSolicitadasPassageiro(passageiro: string): Promise<ISolicitacao[]>;
  getById(id: string): Promise<ISolicitacao>;

}

export { ISolicitacoesCaronaRepository};
