import { ISolicitacao } from '../../models/interface/solicitacao';
import { ISolicitacaoDTO } from '../../dtos/solicitacaoCarona.dto copy';
import { IAceitarRecusarCaronaDTO } from '../../dtos/aceitarRecusarCarona.dto';

interface ISolicitacoesCaronaRepository {
  solicitarCarona({   
    idCarona,
    idPassageiro,
    situacao,
    idMotorista
  }: ISolicitacaoDTO): Promise<ISolicitacao>;

  aceitarRecusarSolicitacaoCarona({
    idSolicitacao,
    situacao
  }: IAceitarRecusarCaronaDTO): Promise<ISolicitacao>;
  delete(_id: string): Promise<void>;
  getCaronasSolicitadasMotorista(idMotorista: string): Promise<ISolicitacao[]>;
  getCaronasSolicitadasPassageiro(idPassageiro: string): Promise<ISolicitacao[]>;
  getById(id: string): Promise<ISolicitacao>;

}

export { ISolicitacoesCaronaRepository};
