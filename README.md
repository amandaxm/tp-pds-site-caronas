# Site de Caronas UFMG

## Escopo
O objetivo é desenvolver um site onde seja possível conectar pessoas que desejam pegar carona com pessoas que oferecem carona. A ideia é os usuários definirem um horário e local que precisem ou que estão oferecendo carona e os usuários que pretendem fazer a mesma rota possam se conectar, e após o contato possam marcar um ponto de encontro.

## Tecnologias
 * Backend - Node
 * Frontend - Angular/Ionic 
 * Banco de Dados - MongoDB

## Equipe
 * Amanda Xavier - Dev Backend 
 * Gabriel Lucas Silva - Dev Frontend
 * Lucas Leandro - Dev Frontend

# MVP
Para validar a nossa hipótese, nós criaremos um MVP do tipo Concierge. O MVP será constituído por grupos de usuários no aplicativo Telegram, onde cada grupo conterá pessoas que moram/trafegam por regiões específicas de Belo Horizonte e que estudam ou trabalham na UFMG. Dentro de cada grupo, os interessados em oferecer e pegar carona poderão se comunicar e negociar as datas, horários e ajuda de custo de cada carona. Todos os interessados poderão acessar os grupos através de um convite, enviado por membros que já pertecem aos grupo. Além disso, cada grupo terá pelo menos um administrador para garantir que os grupos estejam sendo utilizados apenas para oferecer e combinar caronas. 

# Backlog do Produto
###  Tarefas de arquitetura
* Tarefa 1: Preparar ambiente de desenvolvimento backend (Amanda)
* Tarefa 2: Preparar ambiente de desenvolvimento front (Lucas, Gabriel)
* Tarefa 3: Criar projeto e estrutura inicial do backend (Amanda)
* Tarefa 4: Criar projeto e estrutura inicial frontend (Lucas, Gabriel)
* Tarefa 5: Discutir esquema banco de dados (Amanda, Gabriel, Lucas)
* Tarefa 6: Criar tabelas banco de dados (Amanda)

###  História: Como usuário, eu quero cadastrar e fazer login
* Tarefa 1: Implementar rota de cadastro backend (Amanda)
* Tarefa 2: Implementar rota de login backend (Amanda)    
* Tarefa 3: Criar página de cadastro frontend (Gabriel)
* Tarefa 4: Criar página de login frontend (Gabriel)

###  História: Como usuário, eu quero oferecer uma caronas
* Tarefa 1: implementar rota de cadastro de carona backend (Amanda)
* Tarefa 2: implementar tela de cadastro de carona (Lucas) 
* Tarefa 3: implementar tela de listagem das caronas que o usuário está ofertando (Gabriel)

###  História: Como usuário, eu quero ver todas caronas disponíveis
* Tarefa 1: Implementar rota de listagem de caronas (Amanda) 
* Tarefa 2: Implementar filtro da listagem de caronas (Gabriel)
* Tarefa 3: Implementar tela de listagem e pesquisa de carona (Lucas)

###  História: Como usuário, eu quero participar de uma carona
* Tarefa 1: Implementar solicitação de carona backend (Amanda)
* Tarefa 2: Implementar aceite de carona backend (Amanda)
* Tarefa 3: Implementar solicitação de carona frontend (Lucas)
* Tarefa 4: Implementar aceite de carona motorista frontend (Gabriel)

 # Protótipo
 * https://www.figma.com/proto/T2kP0rWjSHUyYjQxbV6fno/Caronas-UFMG?node-id=489%3A197&scaling=min-zoom&page-id=489%3A2&starting-point-node-id=489%3A197

# Documentação da Arquitetura
## Princípios de DDD
Para tornar o design do sistema centrado em conceitos próximos e alinhados com um domínio de negócio, foram implementados os princípios de Domain-Driven Design (DDD). Os princípios defendidos pelo DDD têm como objetivo central permitir o desenvolvimento de sistemas de modo que o seu design seja centrado em conceitos próximos e alinhados com um domínio de negócio.  

Para implementar os princípios de DDD, o aplicativo Caronas UFMG foi projetado a partir de três módulos. Um módulo para cada uma das principais entidades na camada de domínio: Usuário, Carona e SolicitacaoCarona. Onde, a entidade Usuário é responsável por identificar todos os usuários do sistema, Carona é usada para identificar todas as caronas disponíveis (ou realizadas) e SolicitacaoCarona é utilizada para representar todas as solicitações de caronas disponíveis (ou canceladas), assim como os usuários envolvidos em cada uma delas. Para interagir com essas entidades, foram implementados Casos de Uso, que seriam equivalentes aos objetos de serviço do DDD. Nesse caso, um Caso de Uso reflete uma única ação exposta pelo Domínio ao usuário final. Ex: Solicitar carona, aceitar carona, listar caronas disponíveis, etc. Internamente um Caso de Uso controla a interação entre Entidades, Repositórios e outros componentes do Domínio. Por fim, cada entidade possui um repositório que são objetos usados para recuperar outros objetos de domínio do banco de dados.

Abaixo segue uma lista com os objetos de domínios implementados pelo sistema.
* Entidades: 
  * Usuario 
  * Carona
  * Solicitacao 

* Serviços: 
  * Solicitacao
    * deleteSolicitacao
    * showSolicitacoesMotorista
    * showSolicitacoesPassageiro
    * solicitarCarona

  * Usuario
    * createUsuario
    * deleteUsuario
    * listUsuarios
    * loginUsuario
    * showUsuario
    * updateUsuario

  * Carona
    * createCarona
    * deleteCarona
    * listCarona
    * showCarona
    * showCaronaPassageiro
    * showCaronaUsuario
    * updateCarona
    * aceitarRecusarCarona

* Repositórios:
  * CaronaRepository
  * UsuarioRepository
  * SolicitacoesCaronaRepository

## Arquitetura Hexagonal
Essa arquitetura foi escolhida pois permite a separação das classes referentes à infrasestutura, tecnologias e sistemas externos, das classes de domínio, referentes  ao negócio. Esse isolamento permite desacoplar esses dois tipos de classes, trazendo diversos benefícios em relação à manutenção do sistema, tais como reusabilidade de código, alta coesão, baixo acoplamento, independência de tecnologia e códigos que são mais fáceis de serem testados.

Nesse tipo de arquitetura, a comunicação entre as duas classes é mediada através de **adaptadores** e **portas**, onde adaptadores são classes implementadas para interagir com as classes dos dois grupos e, portas, são interfaces usadas para comunicação com as classes de domínio. 

Em nosso sistema, os adaptadores foram implementados através de controladores e repositórios. Os controladores são responsáveis por referenciar os casos de uso que realizam operações relativas ao domínio do sistema. Já os repositórios são referenciados pelos casos de uso para escrever e ler os dados armazenados no banco. Com relação às portas, elas foram implementadas através de interfaces utilizadas pelos casos de uso no domínio do sistema, para se comunicar com os repositórios de cada uma das três entidades implementadas.

A figura abaixo representa a arquitetura de maneira simplificada, ilustrando o fluxo de comunicação do sistema para três casos de uso. Esse fluxo se inicia a partir do aplicativo móvel, implementado com framework Angular e que se comunica diretamente com uma API REST, implementada utilizando a linguagem JavaScript e o framework NodeJS. Cada chamada feita para a API acessa um controlador, que referencia um dos casos de uso do sistema (ex: Listar caronas disponíveis, cancelar solicitação de caronas, listar usuários, etc). Por sua vez, o caso de uso referencia uma das entidades do sistema, assim como a interface de um dos repositórios, que é utilizada para se comunicar com o repositório de cada entidade. Por fim, o repositório realiza uma operação no banco de dados e retorna o resultado desta operação para o usuário.

![arquitetura drawio (7)](https://user-images.githubusercontent.com/30223737/172679805-27af6037-93dc-40b9-8a52-35c8eeb7394f.png)



