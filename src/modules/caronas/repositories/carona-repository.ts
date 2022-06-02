import { ICarona } from '../models/interface/carona';
import Carona from '../models/Carona';
import {
  ICriarCaronaDTO,
  ICaronaRepository,
  IAtualizarCaronaDTO,
} from './interface/ICaronaRepository';

class CaronaRepository implements ICaronaRepository {
  async create({
  motoristaId,
  enderecoDestino,
  enderecoSaida,
  dataHorarioSaida,
  ativa,
  vagasOfertadas,
  vagasDisponiveis,
  veiculo,
  valor,
  passageiros
  }: ICriarCaronaDTO): Promise<ICarona> {
 
    const carona = await Carona.create({
      motoristaId,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor,
      passageiros
    });
   
    return carona;
  }

  async update({
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
  }: IAtualizarCaronaDTO): Promise<ICarona> {
    const carona = await Carona.findByIdAndUpdate(
      { _id: id },
      {
  enderecoDestino,
  enderecoSaida,
  dataHorarioSaida,
  ativa,
  vagasOfertadas,
  vagasDisponiveis,
  veiculo,
  valor,
  passageiros
      },
      { new: true },
    );
    return carona;
  }

  async delete(_id: string): Promise<void> {
    await Carona.findByIdAndDelete({ _id });
  }

  async list(): Promise<ICarona[]> {
    return await Carona.find();
  }

  async getById(id: string): Promise<ICarona> {
    return await Carona.findById(id);
  }

  async getByUserId(idUsuario: string): Promise<ICarona> {
    return await Carona.findOne({ idUsuario });
  }
  async getCaronasUsuario(idMotorista: string): Promise<ICarona[]> {
    return await Carona.find( { motoristaId: idMotorista } );
  }

 async getCaronasPassageiro(idPassageiro: string): Promise<ICarona[]> {

    return await Carona.find( { passageiroId: idPassageiro});
  }
}

export { CaronaRepository };
