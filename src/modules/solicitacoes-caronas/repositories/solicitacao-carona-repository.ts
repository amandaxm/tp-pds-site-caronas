
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
    passageiro,
    situacao,
    motorista
  }: ISolicitacaoDTO): Promise<ISolicitacao> {

    const solicitacao = await Solicitacao.create({
      idCarona,
      passageiro,
      situacao,
      motorista
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

  async getCaronasSolicitadasMotorista(motorista: string): Promise<ISolicitacao[]> {
    return await Solicitacao.find({ motorista: motorista }).populate('passageiro');
  }

  async getCaronasSolicitadasPassageiro(passageiro: string): Promise<ISolicitacao[]> {

    return await Solicitacao.find({ passageiro: passageiro }).populate('passageiro');
  }
  async delete(_id: string): Promise<void> {
    await Solicitacao.findByIdAndDelete({ _id });
  }

  async getById(id: string): Promise<ISolicitacao> {
    return await Solicitacao.findById(id);
  }
}

export { SolicitacoesCaronaRepository };
