# Introdução aos Repositórios

- Um dos padrões mais conhecidos. Serve para nos comunicarmos com a nossa camada de dados, idependente do tipo de banco de dados.
- Um respositório comummente se refere a um local de armazemanto, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois retorna para recuperá-lo, você espera que ele **esteja no mesmo estado que estava quando foi colocado lá**. Em algum momento, você pode optar por remover o item armazenado do repositório. (Veron, Vaughn. Implementing Domain-Driven Design)
- Ao se trabalhar com repositório trabalha-se também com agregados para poder persistir dados no banco de dados. Quando está se trabalhando com agregados, não necessariamente está se trabalhando com mapeamento de tabelas ou algo do banco de dados, simplesmente se tem o objeto e esse objeto precisa ser persistido no banco de dados. Mas um agregado não necessariamente tem apenas uma Entidade. Um agregado pode ter diversas entidade e/ou diversos Objetos de Valor.
- Um agregado não tem nada a ver com uma tabela de banco de dados, ou pelo menos não deveria representar uma. Inclusive, há outros padrões que nesse caso serve melhor. Se há casos onde você precisa fazer a relação cuja a cardinalidade seja de 1 para 1, trabalhar com Data Access Object (DAO) seria uma melhor situação do que você trabalhar com repositório em si.
- No momento em que você colocar um agregado dentro de um repositório para persistir, quando você quiser retornar esses dados o agregado precisa estar no mesmo estado como ele estava antes.
- Não é uma questão de inserir os dados e apenas recuperar. É inserir os dados de uma forma que quando for recuperar, o agregado esteja sempre consistente, a todo momento.

- Esses objetos semelhantes a coleções são sobre persistência. Todo tipo **Agregado** persistente terá um **Repositório**. De modo geral, existe uma relação **um-para-um entre um tipo de agregado e um Repositório.** (Vernon, Vaughn. Implementing Domain-Driven Design)

# Definindo Interface

- O domínio não precisa conhecer a implementação do repositório. Pois se o domínio ficar preso ao repositório, ou seja, a uma implementação para acessar o banco de dados SQL Server obrigatóriamente por exemplo, é um problema, pois é gerado um acoplamento desnecessário.
- Por outro lado, eu quero evitar esse acoplamento e ainda sim fazer com que o domínio tenha controle sobre esse repositório. Como fazer isso?
- Idependente das pastas, o que gera a relação de camadas no projeto, são os arquivos e os conceitos que você está utilizando. Por outro lado, quando for trabalhar na prática, o projeto precisa estar o mais expressível possível para qualquer desenvolvedor enteder do que se trata.
- Vamos desacoplar a implementação do nosso serviço de domínio da implementação concreta do repositório. Uma das formas de se fazer isso é com interfaces.
- Dentro da pasta domain, cria-se a pasta repository
- Dentro de respository: respository-interface.ts
- Agora com a interface implementada, o nosso domínio sempre vai receber um repositório.

# Entendendo a camada de Infra

- Como se trabalho com diversos agregados, cada agregado pode ter uma necessidade bem especícica.
- Por que não criar também uma interface por agreagado para por as próprias peculiaridades ali.
- A gente sabe que o domínio sabe que caso ele precise recuperar qualquer dado de qualquer lugar ele tem essa guide-line da nossa interface.
- Por outro lado, é necessário a implementação concreta do repositório para poder se trabalhar com banco de dados.
- Aqui estamos entrando em outra camada, não é mais a camada de domínio, pois é uma camada específica para se comunicar com situações fora do domínio, como conexões externas com o nosso sistema.
- Aqui vamos criar src/infrastructure. Aqui vemos a separação clara do que se trata de domínio do negócio e do que trata sobre assuntos relacionados a infraestrutura, como a conexão com o banco de dados.
- Aqui vamos também implementar o repositório: infraestructure/repository
- Não existe regra quando se trabalha com pastas, o importante é que o conceito esteja claro
- A camada de infraestrutura também pode ser expressiva. Por exemplo: aqui posso trabalhar com conexão de banco de dados puro, posso trabalhar ocm o ORM. Posso nomear da forma com achar conveniente.
- o sequelize é um ORM (Mapeador Objeto-Relacional). Permite que você crie modelos (classes) em Typescript que representam as tabelas do seu banco de dados.
- Vou criar uma pasta model e criar os modelos específicos do sequelize.
- Percebe-se: em um diretório está toda a minha organização de domain, que tem a sua estrutura, que tem seus agregados e objetos de valor. Já na infra, vou seguir as regras específicas do ORM que foi escolhido (aqui quem manda é o Sequelize)

# Configurando o Sequelize

```bash
npm install sequelize reflect-metadata sequelize-typescript
```

- Vamos utilizar o banco de dados sqlite3 para criar testes. 
- Neste momento não será necessário se comunicar com outros banco de dados.
- Ele trabalha em memória, permitindo que os testes sejam executados muito mais rapidamente.
- Você pode usar um banco de dados como esse para ajudar no processo de desenvolvimento e quando for trabalhar com bancos de dados externos (em produção) ai faz essa mudança. 
- Há as peculiaridades de cada banco mas as operações são as mesmas.
```bash
npm install sqlite3
```
- Vamos trabalhar com testes pois nos testes a gente precisa estabelecer comunicação com o banco de dados
- Criar teste: infraesctructure/repository/product.repository.spec.ts

# Verificando Jest com Sequelize
-  Fazer a adição do ProductModel no Teste. Essa adição mostra para o sequelize que aquele modelo existe
- Antes de rodar os testes precisamos resolver o problema do swc para que os testes passem.
- Criar arquivo na raiz: .swcrc
- a chamada está ocorrendo de forma 100% estática. Será que é uma má prática, será que não era melhor passar uma injeção de dependência? 
- Não estamos pensando em nada disso pois esse repositório de produto é específico para o sequelize. Então ele já tem um acomplamento muito forte. O importante é que essa classe implemente essa interface.

# Implementando CustomerRepostitory
 - Primeiro é necessário modelar o domínio para depois pensar na modelagem de banco de dados. Dessa forma posso copiar a pasta de domínio para qualquer outro projeto que vai funcionar, pois ela é completamente agnóstica a banco de dados.