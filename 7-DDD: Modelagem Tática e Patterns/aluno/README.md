<ol>
 <li>Instalar o pacote do Typescript e geral o manifesto</li><br>

```bash
npm i typescript --save-dev
```

 <li>Instalar o typescript globalmente</li>

```bash
npm install typescript@latest -g
```

 <li>Iniciar as configurações do TypeScript</li><br>

```bash
npx tsc --init
```

<li>Configurar o TypeScript (Configuração no final deste arquivo)</li><br>

```bash
  "include": [
    "src/**/*.ts"
  ],
```

<li>Criar um arquivo de teste (crie uma pasta src e dentro o arquivo test.ts)</li><br>

<li>compilar arquivo de teste</li><br>

```bash
npx tsc
```

<li>Instalar e configurar o pacote do tslint</li><br>

```bash
npm i tslint --save-dev
```

```bash
npx tslint --init
```

</ol>

### Configurações do Typescript<br>

```bash
{
    "incremental": true, # salva somente o que foi modificado
    "outDir": "./dist",  # compilar na pasta dist
},
"include": [
    "src/**/*.ts" # criar uma pasta src e compilar somente o que está nela
],
```

# Criando entidade anêmica

- customer.ts
- A primeira coisa que torna a classe Customer uma entidade é o seu atributo id, ou seja, você não pode distinguir um objeto do outro se o ID for igual.
- Outro ponto é que os outros atributos podem ir mudando com o tempo.
- Da forma como foi construído entidade Customer é conhecida como entidade anêmica, pois sua função é apenas guardar dados, sendo que não há nenhuma regra de negócio nele
- o uso de uma entidade anêmica é para ser utilizado com uma ORM, relacionado os atributos da classe com os parâmetros da tabela do banco de dados, assim ficando preso a uma programação Orientada a ORM.
- Mas devemos lembrar que uma entidade tem um ID único, ela carrega valores que carregam com o tempo, ela tem comportamento e o mais importante, ela contém regras de negócio
- E no DDD as regras de negócio manipulam o coração da aplicação
- Você vai deixar de usar uma entidade como anêmica e vai utilizar uma entidade que carrega as regras de negócio do seu sistema (Modelagem de Domínios Ricos). Se há algo que precisa acontecer com o cliente, é aqui que será alterado.
- O que são regras de negócio? são formas de mudar o comportamento da sua entidade, aplicando validações, fórmulas, tudo que satisfaça o que o sistema está pedindo.
- Qualquer coisa que valide um objeto, que traga uma excessão ou atenda de forma expressiva uma regra que a aplicação precisa é considerado uma regra de negócio

# Regras de negócio

- Motivos para mudança tem relação com regras de negócio.
- Ex: setName e changeName como nome de método: a semântica do changeName no DDD é mais usada pois representa uma intenção de negócio, diferentemente do setName que é só uma forma de mudar o atributo.
- A modelagem do domínio rico expressa o negócio e não métodos getters e setters.
- Vamos suporte que o método changeName precisa retornar o nome completo. O ideal é retorna uma exception pois feriu a REGRA DE NEGÓCIO.
- A validação por ela mesma não significa nada, mas a validação no DDD significa que o estado atual da minha entidade esteja sempre correto

# Consistência constante em primeiro lugar

- A entidade vai ter que representar o estado correto e atual daquele elemento.
- Quando for consultar uma entidade por qualquer motivo, é necessário garantir que seus dados estão consistentes.
- Quando for executado uma regra de negócio os dados da entidade que são obrigatórios PRECISAM ESTAR PREENCHIDOS E ATUALIZADOS.
- **OS DADOS A TODO MOMENTO PRECISAM ESTAREM CONSISTENTES**
- Vamos supor que por uma determinada regra de negócio em uma campanha de marketing eu só consinga o e-mail da pessoa (nesse caso não há problema pois é uma regra específica para esse tipo de caso)

# Princípio da auto-validação

- Uma entidade por padrão ela SEMPRE tem que se auto-validar. Se ela não se validar e deixar essa responsabilidade para qualquer outro objeto ou qualquer outra rotina do sistema, ela está correndo risco, em algum momento, por um erro externo, ficar com um estado inconstiste.
- No momento da construção do objeto ele deve se auto-validar.
- Todas as vezes que for tentado criar um objeto de forma errada ou ferir alguma regra de negócio da entidade, dando a possibilidade do objeto ficar inconsistente, isso deve ser interrompido pela sua auto-validação.
- O importante é expressar semânticamente as regras de negócio no processo de desenvolvimento.
- Nesse tipo de modelagem são atendidas as regras de negócio e não simplesmente getters e setters ou banco de dados.

# Entidade vs ORM

- Porém o ORM vai me obrigar a ter getters e setters. Vou deixar de usar ORM?
- O que é preciso entender é que esta entidade customer é uma entidade focada em NEGÓCIO
- A entidade que seu ORM cria não é uma entidade focada em negócio e sim focada em PERSISTÊNCIA
- Então você vai ter 2 entidades: uma para persistir dados (mas pode ser chamada de Model, Persistência ou qualquer coisa desse tipo) pois o objetivo dela é facilitar a vida do desenvolvedor para que eu faça persistência de dados.
- São 2 arquivos com nomes iguais que representam contextos diferentes
- Exemplos de organização de pastas
- Entity (Domain) (Complexidade de Negócio)
  customer.ts (regra de negócio)
- Infra (Mundo Externo) / Model (Complexidade Acidental)
  customer.ts (get, set, ...)

# Introdução aos objetos de valor

- Todas as vezes que vamos trabalhar para modelar os nossos dados, criar nossas entidades, temos a tendência de trabalhar com tipos primitivos.
- Ex: temos o nome: string, e-mail: string, cpf: string, endereco: string
- Aqui a forma como a gente modela" o sistema é reduzido ao ponto de ficar muito pobre. O Uncle Bob diz que "a arquitetura do sistema precisa "gritar" que ele deve ser feito dessa forma". Nós desenvolvedores não somos expressivos, ou seja, o software não expressa o que exatamente ele é. O software muitas vezes expressa um conjunto de variáveis e esse conjunto tem um tipo, porém semânticamente não expressa nada.
- Então como modelar o domínio da nossa aplicação de forma rica?
- DDD é como você resolve um problema de negócio e é como você enxerga a aplicação. Para modelar a aplicação você precisa modelar o coração dela de uma forma mais expressiva possível, da forma mais rica possível, da forma que realmente expresse o que ela é com as suas características, e não mais com características genéricas como um cep sendo a mesma coisa que um cpf.

# Endendendo Value Objects

- Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object
- Trate o Value Object como imutável.
- Evans, Eric. Domain-Driven Design (p. 99)
- Exemplo:
  Address: Street, City, State, Zip Code, Number
- Existe a possibilidade de ser mudado algum atributo sem afetar outro?
- Na maioria das vezes não, pois aqui no caso eu não altero um endereço, eu TROCO de endereço.
  - Ex: Tenho uma casa alugada na Rua x e mudo para outra casa na rua x em frente. Note que mesmo mudando só o número, neste caso eu não mudando de número, estou mudando de endereço, pois o endereço representa a sua nova casa. Aqui o endereço representa um conjunto de dados para aquele determinado sistema. Agora esse endereço precisa de um identificador único? Nesse caso não, pois ele pode ser trocado. Ele possui um conjunto de propriedades que o representa, mas não necessariamente ele precisa ser único nesse sistema, a não ser que para o contexto desse sistema faça sentido ele ser único.
  - Ex: CPF. o CPF não é uma string! o CPF representa o Código de Pessoa Física, com um conjunto de propriedades que tem uma fórmula, uma máscara específica, que faz sentido para um País. Aqui um campo cpf deveria ser do tipo CPF, onde nesse tipo ele poderia carregar uma série de argumentos. Por exemplo: dígito verificador (int) e numeracao (int).
- O grande ponto aqui é que temos que modelar as coisas de forma tão espressiva, ao ponto que quando você olha para o seu domínio, você consegue entender cada propriedade e que cada coisa esteja no seu lugar.
- Isso é tão importante pois o sistema quando você olha para ele de forma geral de fora para dentro você vai perceber uma coisa. Quanto mais pra fora o sistema estiver, mais instável ele é. Porque pra fora eu troco biblioteca, troco protocolo de comunicação, atualizo o servidor onde está hospedado, o controle de uma API.
- Porém quando vamos descendo e chegando até o miolo do sistema, mais estável ele é. Porque o coração do negócio de uma empresa não fica mudando o tempo inteiro. E como você torna isso estável? Dando expressividade. Uma forma de dar expressividade é evitar colocar tipos primitivos para tudo e começar a criar os seus próprios tipos que representam um conjunto de propriedades que vão fazer sentido para o sistema.
- Regras do Value Objects: precisa estar sempre se auto-validando, pois seu estado sempre precisa estar coeso. Ele é imutável.
- Essas modelagens não tem nada a ver com a modelagem de persistência de banco de dados.

# Introdução aos Agregados

- Uma entidade está correlacionada com outra entidade e também pode estar relacionada com um objeto de valor.
- Como no caso do Address e do Customer. O Address não vive necessariamente sem um Customer, pois ele não tem nem a razão de existir, então eles fazem partes uns dos outros.
- Entender essa cadeia de entidades e objetos de valor começa a fazer sentido na hora do planejamento dos contextos, de como a aplicação vai se comportar e como cada parte dela vai se comunicar. Isso é o que entedemos como agregados.

# Endetendo agregados (Aggregate)

- Um agregado é um conjunto de objetos associados que tratamos como uma única entidade para propósito de mudança de dados.
  - Evans, Eric. Domain-Driven Design (p. 126)
- Esse conjunto de objeto fazem parte de um objetivo em comum, de um comportamento do sistema, onde uma entidade não vive sem a outra e por meio de um agregado você consegue satisfazer os objetivos do negócio.
- Todas as vezes que começar a planejar um software você não vai necessariamente pensar quais entidades ele vai ter para conseguir satisfazer as regras de negócio. Porém vou começar a pensar em quais agregados eu vou precisar para atingir esse objetivo. Pois um agregado está tão relacionado com o outro que você apenas como uma única coisa.
- Ex:
  - Bloco 1 - Customer Aggregate (root Customer)
    - Customer (entity) - Address (Value Object)
  - Bloco 2 - Order Aggregate (root Order)
    - Order (entity) (CustomerID)
    - Item (entity)
- Aqui é importante entender que existe um limitador de espaço entre um objeto e outro. Toda vez que eu crio uma Ordem eu preciso ter pelo menos 1 Item (Relacionamento de 1 Ordem para muitos Itens). A entidade Item só existe se uma Ordem existir, pois toda vez que for criada uma ordem, eu preciso passar os itens dessa ordem. Normalmente esse tipo de transação é atômica, ou seja, crio a ordem e os itens em conjunto naquele momento, pois uma coisa depende da outra.
- Mesma coisa o Cliente. Eu não consigo entregar nada para o cliente se não tiver o endereço. O cliente tem a relação com esse endereço. Porém, nesse nosso caso o endereço é apens um objeto de valor que vai mapear os nossos dados. Já no caso do Item ele é uma entidade, pois ele tem um identificador único.
- Aqui também vemos que um Cliente consegue existir sem uma ordem. Pode estar em outras partes do sistema também. E não necessariamente ele necessita de uma Ordem. Então, apesar do cliente poder gerar uma Ordem e essa Ordem precisar do Cliente para ser gerada, eles estão em blocos separados. Todavia há uma relação entre uma Ordem e um Cliente, pois o Ordem não consegue existir sem esse Cliente. Nesse caso o que identifica um Cliente para uma Ordem? Um ID.
- Não vou colocar a entidade Cliente dentro da Ordem, pois a relação entre eles não é forte o suficiente. Diferente de um Item que a relação é tão forte que quando eu criar uma ordem eu vou adicionar o Item la dentro.
- Resumindo, quando for relacionar um item que é fortemente acoplado como OrdemItem você faz a relação por meio da própria entidade. QUando for relacionar um item que eles não são fortamente dependentes, a relação é feita apenas pelo ID.
- Nesse nosso caso eu tenho:
    - Um agregado de cliente, que nada mais é que um conjunto que satifaz esse bloco, onde o objeto de valor Address e a entidade Cliente fazem parte desse agregado
    - Um agregado de ordem. Esse agregado possui uma entidade Order e uma entidade Item e essas entidade Order possui um relacionamento com o Customer, porém um relacionamento por ID.
- Aqui temos uma cabeça de entrada (root) para os agregados. E essa cabeça é por onde o agregado começa. Depois que você descobre por onde esse agregado começa, o nome do agregado é examente o nome da Entidade. Aqui o Root Aggregate é Order e Customer.
