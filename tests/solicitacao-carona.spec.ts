

import * as bcrypt from 'bcrypt';
import { text } from 'stream/consumers';
import Solicitacao from "../src/modules/solicitacoes-caronas/models/Solicitacao";
const request = require('supertest');
const server = require('../src/server/server')

import Usuario from "../src/modules/usuarios/models/Usuario";

afterEach(async ()=>{
  await server.close();
})
  it("Sucesso ao solicitar carona passageiro, gerando id solicitacao", async () => {
    //mock id
    let  idCarona = '62c2e6044d3da3c5652b66a6';
    let  idPassageiro = "62c2e651721b60312f7e7096";
    let  idMotorista = "62c2e6592412f53740081fb5";

    const solicitacao_carona = await Solicitacao.create({
      carona: idCarona,
      passageiro: idPassageiro,
      situacao: "Pendente",
      motorista: idMotorista
      })
      
    expect(solicitacao_carona).toHaveProperty("_id");
  });

  it("Sucesso ao aceitar carona", async () => {
    //mock id
    let  idCarona = '62c2e6044d3da3c5652b66a6';
    let  idPassageiro = "62c2e651721b60312f7e7096";
    let  idMotorista = "62c2e6592412f53740081fb5";

    const solicitacao_carona = await Solicitacao.findOneAndUpdate({
      carona: idCarona,
      passageiro: idPassageiro,
      situacao: "Aceito",
      motorista: idMotorista
      })
      // solicitacao passa de pendente para ACEITO = 1
      expect(solicitacao_carona.situacao).toContain("Aceito");
  });

  
it("Sucesso criar solicitacao carona", async () => {

  let  idCarona = '62c2e6044d3da3c5652b66a6';
  let  idPassageiro = "62c2e651721b60312f7e7096";
  let  idMotorista = "62c2e6592412f53740081fb5";

  
  const usuario_create = await Usuario.create({
    nome: " Nome Teste",
    email: "email11122422@email",
    senha: "teste",
    ePassageiro: true,
    eMotorista: true
  })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .post('/solicitacoes-carona/')
    .send({
    carona: idCarona,
    passageiro: usuario_create._id,
    situacao: "Pendente",
    motorista: idMotorista
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)
  expect(response.statusCode).toBe(201);

})
  
  it("Sucesso get solicitações motorista", async () => {
    //mock id
    let  idCarona = '62c2e6044d3da3c5652b66a6';
    let  idPassageiro = "62c2e651721b60312f7e7096";
    let  idMotorista = "62c2e6592412f53740081fb5";

    await Solicitacao.create({
      carona: idCarona,
      passageiro: idPassageiro,
      situacao: "Pendente",
      motorista: idMotorista
      })
    const loginUser = await request(server)
      .post("/usuarios/login")
      .send({
        email: "emailemailemailteste11@email",
        senha: "teste"
      })
  
   let endereco = "/solicitacoes-carona/motorista/"+idMotorista;

   const response = await request(server)
    .get(endereco)
    .set('Authorization', `Bearer ${loginUser.body.token}`)

    expect(response.statusCode).toBe(200);
});
  

it("Sucesso get solicitações passageiro", async () => {
  //mock id
  let  idCarona = '62c2e6044d3da3c5652b66a6';
  let  idPassageiro = "62c2e651721b60312f7e7096";
  let  idMotorista = "62c2e6592412f53740081fb5";

  await Solicitacao.create({
    carona: idCarona,
    passageiro: idPassageiro,
    situacao: "Pendente",
    motorista: idMotorista
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

 let endereco = "/solicitacoes-carona/passageiro/"+idPassageiro;

 const response = await request(server)
  .get(endereco)
  .set('Authorization', `Bearer ${loginUser.body.token}`)

  expect(response.statusCode).toBe(200);
});


it("Sucesso delete solicitacao", async () => {
  //mock id
 
  let  idSolicitacao = "62c2e6592412f53740081fb7";

let response =   await Solicitacao.findByIdAndDelete({
    _id: idSolicitacao
    })
    expect(response).toBeNull();

});


it("Erro ao aceitar recusar carona sem isSolicitacao", async () => {
  //mock id
  let  idCarona = '62c2e6044d3da3c5652b66a6';
  let  idPassageiro = "62c2e651721b60312f7e7096";
  let  idMotorista = "62c2e6592412f53740081fb5";

  let solic = await Solicitacao.create({
    carona: idCarona,
    passageiro: idPassageiro,
    situacao: "Pendente",
    motorista: idMotorista
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

 let endereco = "/solicitacoes-carona/"+solic._id;

 const response = await request(server)
  .put(endereco)
  .set('Authorization', `Bearer ${loginUser.body.token}`)
  .send({
    situacao: 1
  
  })
  expect(response.statusCode).toBe(400);
  expect(response.text).toContain("idSolicitacao é obrigatório");
});


it("Erro ao editar solicitacao carona sem situacao", async () => {
  //mock id
  let  idCarona = '62c2e6044d3da3c5652b66a6';
  let  idPassageiro = "62c2e651721b60312f7e7096";
  let  idMotorista = "62c2e6592412f53740081fb5";

  let solic = await Solicitacao.create({
    carona: idCarona,
    passageiro: idPassageiro,
    situacao: "Pendente",
    motorista: idMotorista
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

 let endereco = "/solicitacoes-carona/"+solic._id;

 const response = await request(server)
  .put(endereco)
  .set('Authorization', `Bearer ${loginUser.body.token}`)
  .send({
    idSolicitacao: solic._id,
  
  })
  expect(response.statusCode).toBe(400);
  expect(response.text).toContain("Situacao solicitação é obrigatória");
});

it("Sucesso deletar solicitacao carona", async () => {

  let  idCarona = '62c2e6044d3da3c5652b66a6';
  let  idPassageiro = "62c2e651721b60312f7e7096";
  let  idMotorista = "62c2e6592412f53740081fb5";

  let solic = await Solicitacao.create({
    carona: idCarona,
    passageiro: idPassageiro,
    situacao: "Pendente",
    motorista: idMotorista
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .delete('/solicitacoes-carona/' + solic._id)
    .send({
      idSolicitacao: solic._id
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)

  expect(response.statusCode).toBe(200);
  expect(response.text).toContain(`Solicitacao ${solic._id} removida com sucesso`);

})

beforeEach(async () => {
  await Usuario.findOneAndDelete({ email: "email11122422@email" });
});

