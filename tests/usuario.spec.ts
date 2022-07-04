import Usuario from "../src/modules/usuarios/models/Usuario";
const request = require('supertest');
const server = require('../src/server/server')

afterEach(async () => {
  await server.close();
})

it("Erro criar usuário sem email", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  expect(response.text).toContain("Email obrigatório");
  expect(response.statusCode).toBe(400);
});

afterEach(async () => {
  await server.close();
})
it("Erro criar usuário sem nome", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      email: "email@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  expect(response.text).toContain("Nome é obrigatório");
  expect(response.statusCode).toBe(400);
});

afterEach(async () => {
  await server.close();
})
it("Erro criar usuário sem senha", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "email@email",
      ePassageiro: true,
      eMotorista: false
    })

  expect(response.text).toContain("Senha obrigatória");
  expect(response.statusCode).toBe(400);
});

afterEach(async () => {
  await server.close();
})
it("Erro criar usuário sem flag eMotorista", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "email@email",
      ePassageiro: true,
      senha: "teste",

    })

  expect(response.text).toContain("Flag eMotorista obrigatória");
  expect(response.statusCode).toBe(400);
});

afterEach(async () => {
  await server.close();
})
it("Erro criar usuário sem flag eMotorista", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "email@email",
      senha: "teste",
      eMotorista: true
    })

  expect(response.text).toContain("Flag ePassageiro obrigatória");
  expect(response.statusCode).toBe(400);
});


afterEach(async () => {
  await server.close();
})
it("Erro ao tentar criar usuário que já existe", async () => {
  const user = await Usuario.create({
    nome: " Nome Teste",
    email: "email@email",
    senha: "teste",
    ePassageiro: true,
    eMotorista: false
  });

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "email@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  //    const compareHash = await bcrypt.compare("teste", user.password_hash);

  expect(response.text).toContain("Usuário já existe, favor fazer o login");
  expect(response.statusCode).toBe(400);
});

beforeEach(async () => {
  await Usuario.findOneAndDelete({ email: "emailemailemailteste@email" });
});

afterEach(async () => {
  await server.close();
})
it("Sucesso ao criar usuário", async () => {
  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "emailemailemailteste@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })
  expect(response.statusCode).toBe(201);
});

//atualizar usuario

afterEach(async () => {
  await server.close();
})
it("Erro ao atualizar sem token", async () => {

  let endereco = "/usuarios/43763f745gfgg";
  const response = await request(server)
    .put(endereco)
    .send({
      nome: " Nome Teste",
      email: "email@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  expect(response.text).toContain("Acesso negado!");
  expect(response.statusCode).toBe(401);
});

beforeEach(async () => {
  await Usuario.findOneAndDelete({ email: "emailemailemail10@email" });
});

afterEach(async () => {
  await server.close();
})
it("Erro ao atualizar usuário com token invalido", async () => {

  let endereco = "/usuarios/24234324324";
  const response = await request(server)
    .put(endereco)
    .send({
      nome: " Nome Teste",
      email: "email@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })
    .set('Authorization', `Bearer gjntngnugeyuguybfenneubgfsgeybh`)

  expect(response.statusCode).toBe(400);
  expect(response.text).toContain("O Token é inválido!");
});


afterEach(async () => {
  await server.close();
})
it("Erro realizar login senha incorreta", async () => {

  let endereco = "/usuarios/login";
  const response = await request(server)
    .post(endereco)
    .send({
      email: "email@email",
      senha: "123",
    })

  expect(response.statusCode).toBe(400);
  expect(response.text).toContain("Senha inválida");
});


afterEach(async () => {
  await server.close();
})
it("Erro email obrigatório ", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "emailemailemailteste@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      senha: "teste",
    })
  expect(loginUser.statusCode).toBe(400);
  expect(loginUser.text).toContain("Email obrigatório");
});


afterEach(async () => {
  await server.close();
})
it("Erro senha obrigatória", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "emailemailemailteste@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "email@email.com"
    })
  expect(loginUser.statusCode).toBe(400);
  expect(loginUser.text).toContain("Senha obrigatória");
});

afterEach(async () => {
  await server.close();
})
it("Sucesso ao realizar login", async () => {

  const response = await request(server)
    .post("/usuarios")
    .send({
      nome: " Nome Teste",
      email: "emailemailemailteste@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste@email",
      senha: "teste"
    })
  expect(loginUser.statusCode).toBe(201);
});

afterEach(async () => {
  await server.close();
})
it("Erro atualizar usuário não existe", async () => {

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })


  let endereco = "/usuarios/68950867856wqq";
  const response = await request(server)
    .put(endereco)
    .send({
      nome: " Nome Teste",
      email: "email11122422@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)

  expect(response.statusCode).toBe(400);
  expect(response.text).toContain("Usuario não existe");
});

afterEach(async () => {
  await server.close();
})
it("Retorna todos usuarios'", () => {
  request(server)
    .get('/usuarios')
    .expect(200)
})


it("Sucesso delete usuario", async () => {
  //mock id

  let idUsuario = "62c2e6592412f53740081fb7";

  let response = await Usuario.findByIdAndDelete({
    _id: idUsuario
  })
  expect(response).toBeNull();

});

it("Sucesso atualizar usuario", async () => {

  const usuario_create = await Usuario.create({
    nome: " Nome Teste",
    email: "email11122422@email",
    senha: "teste",
    ePassageiro: true,
    eMotorista: false
  })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .put('/usuarios/' + usuario_create._id)
    .send({
      id: usuario_create._id,
      nome: " Mudando nome Teste",
      email: "email11122422@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })

    .set('Authorization', `Bearer ${loginUser.body.token}`)
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("Mudando nome Teste");

})

beforeEach(async () => {
  await Usuario.findOneAndDelete({ email: "email11122425445542@email" });
});

it("Sucesso criar usuario", async () => {

  const response = await request(server)
    .post('/usuarios/')
    .send({
      nome: " create",
      email: "email11122425445542@email",
      senha: "teste",
      ePassageiro: true,
      eMotorista: false
    })
  expect(response.statusCode).toBe(201);

})

it("Sucesso deletar usuario", async () => {

  const usuario_create = await Usuario.create({
    nome: " Nome Teste",
    email: "email11122422@email",
    senha: "teste",
    ePassageiro: true,
    eMotorista: false
  })

  const loginUser = await request(server)
    .post("/usuarios/login")
    .send({
      email: "emailemailemailteste11@email",
      senha: "teste"
    })

  const response = await request(server)
    .delete('/usuarios/' + usuario_create._id)
    .send({
      idUsuario: usuario_create._id
    })
    .set('Authorization', `Bearer ${loginUser.body.token}`)

  expect(response.statusCode).toBe(200);
  expect(response.text).toContain(`Usuario ${usuario_create._id} removido com sucesso`);

})
