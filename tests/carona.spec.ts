import * as bcrypt from 'bcrypt';
import { text } from 'stream/consumers';
import Carona from "../src/modules/caronas/models/Carona";
const request = require('supertest');
const server = require('../src/server/server')


afterEach(async () => {
  await server.close();
})

it("Erro ao criar carona sem motorista", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
    })

  expect(response.text).toContain("Motorista é obrigatório");
  expect(response.statusCode).toBe(400);
});

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem endereço destino", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843"
    })

  expect(response.text).toContain("Endereço destino é obrigatório");
  expect(response.statusCode).toBe(400);
});

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem endereço origem", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços"
    })

  expect(response.text).toContain("Endereço origem é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem Data e hora saída ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
    })

  expect(response.text).toContain("Data e hora de saída é obrigatória");
  expect(response.statusCode).toBe(400);
})

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem número de vagas disponíveis ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40"
    })

  expect(response.text).toContain("Número vagas disponíveis é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem número de vagas ofertadas ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasDisponiveis: "5"
    })

  expect(response.text).toContain("Número vagas ofertadas é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem descrição veículo ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis: "3",
    })

  expect(response.text).toContain("Veículo é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async () => {
  await server.close();
})
it("Erro ao criar carona sem valor ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis: "3",
      veiculo: "palio 4 portas cinza"
    })

  expect(response.text).toContain("Valor é obrigatório");
  expect(response.statusCode).toBe(400);
})


it("Erro ao criar carona sem valor ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista: "84975hurh843",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis: "3",
      veiculo: "palio 4 portas cinza",
      valor: "4,50"
    })

  expect(response.text).toContain("Status carona (ativa) é obrigatório");
  expect(response.statusCode).toBe(400);
})

it("Sucesso ao criar carona", async () => {
  //mock id

  let idMotorista = "62c2e6592412f53740081fb5";

  const solicitacao_carona = await Carona.create({
    motorista: idMotorista,
    enderecoDestino: "Praça serviços",
    enderecoSaida: "Praça raul soares",
    dataHorarioSaida: "12/09/2022 15:40",
    vagasOfertadas: "4",
    vagasDisponiveis: "3",
    veiculo: "palio 4 portas cinza",
    valor: "4,50",
    ativa: "true"
  })
  // se criou gerou o id da carona
  expect(solicitacao_carona).toHaveProperty("_id");
});

it("Retorna todas caronas'", () => {
  request(server)
    .get('/carona')
    .expect(200)
})


it("Sucesso so retornar todas caronas motorista'", async () => {
  const response = await request(server)
    .get('/carona/motorista/437856456564')
  expect(response.statusCode).toBe(200);

})

it("Sucesso so retornar todas caronas passageiro'", async () => {
  const response = await request(server)
    .get('/carona/passageiro/437856456564')

  expect(response.statusCode).toBe(200)
})


it("Erro ao retornar carona sem login'", async () => {
  const response = await request(server)
    .get('/carona/465745453')

  expect(response.statusCode).toBe(401)
})



it("Sucesso delete carona", async () => {
  //mock id

  let idCarona = "62c2e6592412f53740081fb7";

  let response = await Carona.findByIdAndDelete({
    _id: idCarona
  })
  expect(response).toBeNull();

});


it("Erro deletar carona not found'", async () => {


  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .delete('/carona/62c2e6592412f53740081fb7')
    .send({
      idCarona: "62c2e6592412f53740081fb7"
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)
  expect(response.statusCode).toBe(400);
  expect(response.text).toContain("Carona not found");

})


it("Sucesso deletar carona", async () => {

  let idMotorista = "62c2e6592412f53740081fb5";

  const carona_create = await Carona.create({
    motorista: idMotorista,
    enderecoDestino: "Praça serviços",
    enderecoSaida: "Praça raul soares",
    dataHorarioSaida: "12/09/2022 15:40",
    vagasOfertadas: "4",
    vagasDisponiveis: "3",
    veiculo: "palio 4 portas cinza",
    valor: "4,50",
    ativa: "true"
  })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .delete('/carona/' + carona_create._id)
    .send({
      idCarona: carona_create._id
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain(`Carona ${carona_create._id} removida com sucesso`);

})

it("Sucesso atualizar carona", async () => {

  const carona_create = await Carona.create({
    motorista: "62c2e6592412f53740081fb5",
    enderecoDestino: "Praça serviços",
    enderecoSaida: "Praça raul soares",
    dataHorarioSaida: "12/09/2022 15:40",
    vagasOfertadas: "4",
    vagasDisponiveis: "3",
    veiculo: "palio 4 portas cinza",
    valor: "4,50",
    ativa: "true"
  })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .put('/carona/' + carona_create._id)
    .send({
      id: carona_create._id,
      motorista: "62c2e6592412f53740081fb5",
      enderecoDestino: "Praça serviços",
      enderecoSaida: "Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis: "3",
      veiculo: "palio 4 portas cinza",
      valor: "5,80",
      ativa: "true"
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("5,80");
})
