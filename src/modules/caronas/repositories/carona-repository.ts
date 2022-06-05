import { ICarona } from '../models/interface/carona';
import Carona from '../models/Carona';
import {
  ICriarCaronaDTO,
  ICaronaRepository,
  IAtualizarCaronaDTO,
} from './interface/ICaronaRepository';

class CaronaRepository implements ICaronaRepository {
  async create({
  idMotorista,
  enderecoDestino,
  enderecoSaida,
  dataHorarioSaida,
  ativa,
  vagasOfertadas,
  vagasDisponiveis,
  veiculo,
  valor,
  }: ICriarCaronaDTO): Promise<ICarona> {
 
    const carona = await Carona.create({
      idMotorista,
      enderecoDestino,
      enderecoSaida,
      dataHorarioSaida,
      ativa,
      vagasOfertadas,
      vagasDisponiveis,
      veiculo,
      valor,
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
    return await Carona.find( { idMotorista: idMotorista } );
  }

 async getCaronasPassageiro(idPassageiro: string): Promise<ICarona[]> {

    return await Carona.find( { idPassageiro: idPassageiro});
  }
}

export { CaronaRepository };
