
import {
  ISolicitacoesCaronaRepository
} from './interface/ISolicitacaoRepository';
import Solicitacao from '../models/Solicitacao';
import { ISolicitarCaronaDTO } from '../dtos/solicitarCarona.dto';
import { ISolicitacao } from '../models/interface/solicitacao';
import { IAceitarRecusarCaronaDTO } from '../dtos/aceitarRecusarCarona.dto';
import { ISolicitacaoDTO } from '../dtos/solicitacaoCarona.dto copy';

class SolicitacoesCaronaRepository implements ISolicitacoesCaronaRepository {
 
  async solicitarCarona({
    idCarona,
    idPassageiro,
    situacao,
    idMotorista
  }: ISolicitacaoDTO): Promise<ISolicitacao> {

    const solicitacao = await Solicitacao.create({
    idCarona,
    idPassageiro,
    situacao,
    idMotorista
    });
   
    return solicitacao;
  }

  async aceitarRecusarSolicitacaoCarona({
    idSolicitacao,
    situacao,
  }: IAceitarRecusarCaronaDTO): Promise<ISolicitacao> {
    const solicitacao = await Solicitacao.findByIdAndUpdate(
      { _id: idSolicitacao },
      {
        situacao,
      },
      { new: true },
    );
    return solicitacao;
  }
  
  async getCaronasSolicitadasMotorista(idMotorista: string): Promise<ISolicitacao[]> {
    return await Solicitacao.find( { idMotorista: idMotorista } );
  }

 async getCaronasSolicitadasPassageiro(idPassageiro: string): Promise<ISolicitacao[]> {

    return await Solicitacao.find( { idPassageiro: idPassageiro});
  }
  async delete(_id: string): Promise<void> {
    await Solicitacao.findByIdAndDelete({ _id });
  }
  
  async getById(id: string): Promise<ISolicitacao> {
    return await Solicitacao.findById(id);
  }
}

export { SolicitacoesCaronaRepository };