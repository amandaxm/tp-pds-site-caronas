import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';

import { ISolicitacoesCaronaRepository } from '../../repositories/interface/ISolicitacaoRepository';
import { ISolicitarCaronaDTO } from '../../dtos/solicitarCarona.dto';
import { IAceitarRecusarCaronaDTO } from '../../dtos/aceitarRecusarCarona.dto';
import { ISolicitacao } from '../../models/interface/solicitacao';
import { ICaronaRepository } from '../../../caronas/repositories/interface/ICaronaRepository';
import { CaronaRepository } from '../../../caronas/repositories/carona-repository';
import { Status } from '../../../ValueObjects/EnumStatus';

@injectable()
class AceitarRecusarCaronaUseCase {
  constructor(
    @inject('SolicitacoesCaronaRepository')
    private repository: ISolicitacoesCaronaRepository,
    @inject('CaronaRepository')
    private caronaRepository: ICaronaRepository

  ) { }

  async execute({
    situacao,
    idSolicitacao
  }: IAceitarRecusarCaronaDTO): Promise<ISolicitacao> {

    const solicitacaoResponder = await this.repository.getById(idSolicitacao);
    const carona = await this.caronaRepository.getById(solicitacaoResponder.idCarona);
   
    var numeroDeVagasAtuais = carona.vagasDisponiveis.valueOf();
 

    if(carona.passageiros.find(x => x.usuarioId === solicitacaoResponder.passageiro)){ // se motorista mudou de ideia e deseja aceitar/recusar passageiro
      var index = carona.passageiros.findIndex(x => x.usuarioId === solicitacaoResponder.passageiro);
      carona.passageiros[index] =  { usuarioId: solicitacaoResponder.passageiro, status: situacao } // update passageiro na carona

    } else {
      const passageiroRecusarAceitar = { usuarioId: solicitacaoResponder.passageiro, status: situacao };
      carona.passageiros.push(passageiroRecusarAceitar); // se não adiciona passageiro a carona e decresce o número de vagas
      numeroDeVagasAtuais = situacao === Status.Aceito ? numeroDeVagasAtuais - 1 : numeroDeVagasAtuais;// se for aceito decresce
    }

    await this.caronaRepository.update({ // atualiza a carona com a situação do passageiro
      id: carona.id,
      enderecoDestino: carona.enderecoDestino,
      enderecoSaida: carona.enderecoSaida,
      dataHorarioSaida: carona.dataHorarioSaida,
      ativa: carona.ativa,
      vagasOfertadas: carona.vagasOfertadas,
      vagasDisponiveis: numeroDeVagasAtuais,
      veiculo: carona.veiculo,
      valor: carona.valor,
      passageiros: carona.passageiros
    }
    );

      const solicitacao = await this.repository.aceitarRecusarSolicitacaoCarona({
        situacao,
        idSolicitacao
      });
      return solicitacao;
    
  }
}

export { AceitarRecusarCaronaUseCase };
