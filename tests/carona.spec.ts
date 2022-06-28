import * as bcrypt from 'bcrypt';
import { text } from 'stream/consumers';
import Usuario from "../src/modules/usuarios/models/Usuario";
const request = require('supertest');
const server = require('../src/server/server')


afterEach(async ()=>{
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

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem endereço destino", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843"
    })

  expect(response.text).toContain("Endereço destino é obrigatório");
  expect(response.statusCode).toBe(400);
});

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem endereço origem", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços"
    })

  expect(response.text).toContain("Endereço origem é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem Data e hora saída ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços",
      enderecoSaida:"Praça raul soares",
    })

  expect(response.text).toContain("Data e hora de saída é obrigatória");
  expect(response.statusCode).toBe(400);
})

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem número de vagas disponíveis ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços",
      enderecoSaida:"Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40"
    })

  expect(response.text).toContain("Número vagas disponíveis é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem número de vagas ofertadas ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços",
      enderecoSaida:"Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasDisponiveis: "5"
    })

  expect(response.text).toContain("Número vagas ofertadas é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem descrição veículo ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços",
      enderecoSaida:"Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis:"3",
    })

  expect(response.text).toContain("Veículo é obrigatório");
  expect(response.statusCode).toBe(400);
})

afterEach(async ()=>{
  await server.close();
})
it("Erro ao criar carona sem valor ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços",
      enderecoSaida:"Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis:"3",
      veiculo: "palio 4 portas cinza"
    })

  expect(response.text).toContain("Valor é obrigatório");
  expect(response.statusCode).toBe(400);
})


it("Erro ao criar carona sem valor ", async () => {

  const response = await request(server)
    .post("/carona")
    .send({
      motorista:"84975hurh843",
      enderecoDestino:"Praça serviços",
      enderecoSaida:"Praça raul soares",
      dataHorarioSaida: "12/09/2022 15:40",
      vagasOfertadas: "4",
      vagasDisponiveis:"3",
      veiculo: "palio 4 portas cinza",
      valor: "4,50"
    })

  expect(response.text).toContain("Status carona (ativa) é obrigatório");
  expect(response.statusCode).toBe(400);
})

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

// afterEach(async ()=>{
//   await Usuario.findOneAndDelete({ email: "emailemailemailteste3453@email" });
// })

// it("Erro retornar carona não encontrada'", async () => {
//   const responseUser = await request(server)
//     .post("/usuarios")
//     .send({
//       nome: " Nome Teste",
//       email: "emailemailemailteste@email",
//       senha: "teste",
//       ePassageiro: true,
//       eMotorista: false
//     })

//   const loginUser = await request(server)
//     .post("/usuarios/login")
//     .send({
//       email: "emailemailemailteste@email",
//       senha: "teste"
//     })

// const response = await request(server)
// .get('/carona/465745453')
// .set('Authorization', `Bearer ${loginUser.body.token}`)

// expect(response.statusCode).toBe(400)


// })