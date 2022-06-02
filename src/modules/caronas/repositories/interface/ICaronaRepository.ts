import { ICriarCaronaDTO } from '../../dtos/criarCarona.dto';
import { IAtualizarCaronaDTO } from '../../dtos/updateCarona.dto';
import { ICarona } from '../../models/interface/carona';

interface ICaronaRepository {
  create({   
    motoristaId,
    enderecoDestino,
    enderecoSaida,
    dataHorarioSaida,
    ativa,
    vagasOfertadas,
    vagasDisponiveis,
    veiculo,
    valor,
    passageiros}: ICriarCaronaDTO): Promise<ICarona>;
  update({
    id,
    enderecoDestino,
    enderecoSaida,
    dataHorarioSaida,
    ativa,
    vagasOfertadas,
    vagasDisponiveis,
    veiculo,
    valor,
    passageiros
  }: IAtualizarCaronaDTO): Promise<ICarona>;
  delete(_id: string): Promise<void>;
  list(): Promise<ICarona[]>;
  getById(_id: string): Promise<ICarona>;
  getByUserId(idUsuario: string): Promise<ICarona>;
  getCaronasUsuario(idMotorista: string): Promise<ICarona[]>;
  getCaronasPassageiro(idPassageiro: string): Promise<ICarona[]>;
}

export { ICriarCaronaDTO, ICaronaRepository, IAtualizarCaronaDTO };