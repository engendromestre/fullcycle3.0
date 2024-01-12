# Introdução

 - O DDD vai além de somente prática. Ele vai além, conhecendo: o ambiente, os contextos, as partes interessadas e fundamentalmente fazer uma separação que faça sentido para organização em si.
 - O DDD é usado quando se trata do desenvolvimento de softwares maiores. Ele é fundamentalmente utilizado para grandes projetos aonde não se tem CLAREZA de tudo que está acontecendo no projeto.
 - O DDD pode ser definido em uma palavra como CLAREZA. Com ter CLAREZA no que está sendo desenvolvido para que esse software consiga viver por anos.
 - Mudar a visão que se tem de software legado (Fulano deixou um legado por onde passou), sendo que se trata de um software mais antigo, porém com muita clareza de como foi arquitetado. O DDD ajuda e muito a atingir esse propósit.

 # Ponto de partida do DDD

 - O conteúdo do DDD é denso pois se trata de princípios. Falar em DDD é falar de princípios de como modelar um software. A própria descrição Domain Driven Design já fala em como desenhar o seu software guiado ao Domínio, que se trata do coração da aplicação.
 - Na parte prática vamos entender os principais patterns (padrões) que nós podemos utilizar no DDD para facilitar a vida do desenvolvedor no dia a dia. Todavia quando falamos de DDD, não estamos falando em patterns apenas, estamos indo muito mais além do que modelar um software em geral.
## O que é o DDD? 
  - É uma forma de desenvolver o software com o foco no coração da aplicação, que é o que a gente chama de domínio. Tem o objetivo de entender as regras dessa aplicação, os processos e as complexidades, separando-as asssim de outros pontos complexos que normalmente são adicionados durante o processo de desenvolvimento. Então conseguir modelar um software entendendendo suas regras, seus processos e os seus pontos complexos.
  - Complexidade é algo sério, pois há tipos diferentes de complexidade. Tem-se a complexidade do negócio, tem as complexidades que os desenvolvedores adicionam para resolver a complexidade do negócio. **Portanto, DDD modela problemas e trás soluções para os mesmos, organizando e ententendo sistemas, separando responsabilidades e fundamentalmente, separando os tipos de complexidade na hora de trabalhar**.

## De onde vem o DDD?
 - Vem do livro de DDD de Eric Evans de 2003. Ganhou visibilidade no mundo dos microsserviços porque grande parte do desafio de trabalhar com microsserviços é exatamente conseguir modelar software. É conseguir entender complexidade e separá-las, entender contextos, inclusive para que você consiga criar esses microsserviços de forma mais independente, de forma com que o sistema não fique inteiramente perdido e totalmente fragmentado da forma errada. 
 - Quando se trata do livro, se nota que tem toda uma filosofia. Essa filosofia é o mais importante, do que os projetos, os padrões de projetos que podem ser utilizados no dia a dia, pois ela acaba trazendo uma visão muito mais madura, para que um desenvolvedor consiga trabalhar em um projeto de software de forma mais decente. Pois quando estamos trabalhando e entendendo um pouco essa filosofia do DDD, vemos o quão importante é conseguir entender e modelar problemas. Entender o negócio para que você consiga gerar um software com uma ótima qualidade. Neste livro você também encontra exemplos, de forma geral, e também patterns que normalmente são usados para se trabalhar.

# Softwares complexos
 - DDD é/ou deve ser aplicado para casos de projetos de softwares complexos. 
 - Utilizado quando há problemas maiores onde não há clareza do domínio e principalmente quando envolve muitas pessoas, principalmente de departamentos diferentes que falam coisas diferentes uma das outras
 - Grandes projetos possuem muitas áreas, muitas regras de negócio, muitas pessoas com diferentes contextos. Cada área tem a sua própria forma de se expressar, certos jargões que eles acabam utilizando para conseguir trabalhar no dia a dia.
 - Não há como não utilizar técnicas avançadas em projetos de alta complexidade. Há políticas, pessoas, departamentos, cultura, jargões, softwares que já rodam, softwares de prateleira, planilhas de excel, e tudo isso deve ser levado em consideração.
 - Grande parte da complexidade desse tipo de software não vem da tecnologia, mas sim da comunicação, separação de contextos, entendimento do negócio por diversos ângulos. A grande parte dos problemas vem da complexidade do negócio e não da tecnológica.
 - Pessoas: desenvolvedores, product owner, domain expert, gerentes, burocrácia, regras de governança, diretoria, experts que querem um sistema mas não concordam de como esse sistema deve funcionar...

 # Como o DDD pode ajudar?
  -  Entender com profundidade o domínio e subdomínios da aplicação. Domínio (Coração do software) está ligado a função principal daquilo que vai ser desenvolvido. Subdomínios: são partes do nosso sistemas que em conjunto conseguem agregar valor para a empresa.
  - Ter uma linguagem universal (linguagem ubígua) entre todos os envolvidos. Todas as pessoas envolvidas no desenvolvimento do software, seja desenvolvedores, domain experts (pessoas que vão dizer o que o software precisa fazer). Há muitas chances do projeto dar certo se uma linguagem universal for desempenhada entre todos.
  - Criar o design estratégico utilizando Bounded Contexts. Aqui se percebe que há um domínio com vários sub-domínios e baseado nesses subdomínios criar uma estratégia de modelagem para criar contextos e com esses contextos definidos tem-se a visão geral de tudo que precisa ser desenvolvido. 
  - Criar o design tático para conseguir mapear e agregar as entidades e objetos de valor da aplicação, bem como os eventos de domínio.
  - Clareza do que é complexidade de negócio e complexidade técnica

  # Resumo
  - Citação do Livro do Vernon (Domain-Driven Design Distilled p.11) falando do que se trata no final das contas o DDD. 
    - In short, DDD is primarily about modeling a Ubiquitous Language in a n explicitly Bounded Context. 
  - Primeiro tem toda uma confusão do meu domínio. Depois eu começo a entender as pessoas entre os diversos departamentos, entre seus diversos colegas de trabalho, entendendo a linguagem de cada área e, quando percebemos que a linguagem começa a mudar, percebemos que essa linguagem está dentro de um contexto. Quando uma linguagem muda o contexto normalmente muda. E entendido o contexto, o mesmo é delimitado e depois começa-se a desenvolver o software para aquele pedaço. Com esse tipo de expressão, com esse tipo de jargão, com os relatórios que um domain experts quer, com as entidades e participantes. Eventualmente esse contexto vai poder falar com outro contexto.

  # Domínio vs Subdomínio
   - Design guiado ao Domínio da aplicação: conforme fomos entendendo o domínio, podemos dividí-lo em domínios menores ou subdomínios. Nesse processo também percebe-se que há grau de importância de negócio que esse subdomínio tem. Nessa avalição vemos qual é realmente o coração do negócio e o definimos como o **Core Domain**, domínio pelo qual se ele não existir não tem sentido de existência do software. 
   - Core Domain: 
    - Coração do negócio
    - Diferencial competitivo da empresa
   - Support Subdomain (subdomínios de suporte): 
    - Apoiam o domínio: ajuda ao Core Domain funcionar. Ex.: Loja Virtual e Wirehouse. O Wirehouse vai ajudar a Loja Virtual e o processo de vendas
   - Generic Subdomain:
    - Softwares auxiliares: Ex. Gateway de pagamento
    - Sem diferencial competitivo

# Espaço do problema vs espaço da solução
 - Problema
  - Visão geral do domínio e suas complexidades
  - Separar esse domínio em Subdomínios
 - Solução
  - Análise e modelagem do domínio
  - Contextos delimitados: acabam se tornando subprodutos para serem trabalhados e resolvidos

# O que é um contexto delimitado (Bounded Contexts)
 - A Bounded Context is an explicit boundary within which a domain model exists. Inside the boudary all terms and phrases of the Ubiquitous Language have specific meaning, and the model reflects the Language with exactness. (Verno, Vaughn. Implementing Domain-Driven Design)

# Contexto é rei
 - o Contexto sempre vai determinar qual área da empresa que se está trabalhando, qual o tipo de problema que está sendo resolvido, e essencialmente se a linguagem daquele contexto tem significados diferentes.
 - Ex: Tem-se 2 palavras iguais representando contextos diferentes, há contextos delimitados diferentes
  - Ticket:Venda de ingressos
  - Ticket: Suporte ao cliente
 - Ex: Palavras diferentes representando a mesma coisa, estamos em contextos diferentes

# Elementos transversais
 - Ex: o Cliente é o mesmo, porém em contextos diferentes. Esses contextos acabam se conversando entre entidades, entre elementos, que acabam sendo transversais.
  - Cliente: Venda de ingressos (Evento, Ticket, Local, Vendedor)
  - Cliente: Suporte ao cliente (Ticket, Dúvida, Departamento, Responsável)

# Visão Estratégica
 - É necessário ter uma visão geral de como os contextos estão se encaixando. Os contextos vão se complementar, eventualmente um servindo o outro. Com a visão geral dá para organizar os seus times durante todo o processo de modelagem, organização e início do desenvolvimento de um software.

# Context Mapping
 - Exemplo: onde ganho dinheiro? qual é o meu power business?
  - Vendas de ingressos online (Power Business)
  - Suporte ao cliente
  - Vendas de ingressos parceiros (shoppigns, casas noturnas)
  - Pagamentos
  - Pode ser criado um time para cada contexto. Esse tipo vai começar a falar a lingua e se organizar conforme a cultura da área. Aqui há pessoas desenvolvedoras e domain experts para resolver um tipo de contexto.
  - Tanto a venda online quando a de parceiros, eles tem um modelo de parceria, pois ambos vendem ingressos, ambos estão alinhados a fazer a vendas. Provavelmente todos precisam estar integrados no mesmo sistema. Aqui podemos dizer que a relação entre os 2 contextos é de parceria. Na prática esses 2 times trabalham em conjunto para que o resultado funcione.
  - Shared Kernel: os 2 times criam um SDK (núcleo de sistema) onde os 2 usam.
  - Vendas de ingressos online -> pagamentos: relação entre cliente e fornecedor. Um time vai fornecer um serviço para que o outro time possa realizar a transação. Aqui será fornecido um serviço de pagamento para vendas, criando uma relação de upstream e downstream. O upstream é o cara que vai fornecer o serviço e vai ditar as regras de como esse serviço vai ser implantado e utilizado. O Downstream vai precisar se adaptar para poder consumir algo de um Upstream.
  - O suporte ao cliente também pode ter uma relação cliente/fornecedor com vendas de ingressos: onde a área de vendas onde os clientes são gerados pode ser o Upstream e a área de suporte o downstream.
  - Depende da dinâmica do negócio aqui. Não há certo e errado.
  - Pagamento -> Gateway de Pagamento (serviço externo): vamos supor que o sistema de pagamento vai trabalhar com o gateway xpto e eles tem o seu modo de funcionamento. Então o Gateway será o U e Pagamento o D. A relação aqui é conformista, independente do que você queira ou não, você vai precisar se conformar a utilizar um serviço externo da forma que ele é. 
    - Quanto mais conformista for uma relação, mais a gente tende a se amarrar a esse sistema.
    - ACL (anticorruption layer ou camada anticorrupção): camada de interface entre o seu contexto e a gateway de pagamento aqui do exemplo. Aqui eu só troco o código da ACL e não o código do área de pagamento, funcionando como um adaptador.

# Padrões de Context Mapping
 - Partnership: parceria
 - Shared Kernel: biblioteca compartilhada
 - Customer-Supplier Development: Cliente/Fornecedor
 - Conformist
 - Anticorruption-layer
 - Open host service: um contexto fornece um serviço e esse serviço vai estar disponível com algum protocolo
 - Published Language: on de a linguagem faz total diferença na comunicaçã Ex. Para consumir uma determinada API vou precisar mandar em um determinado formato (JSON por exemplo)
 - Separate Ways: contextos que não conseguem se comunicar e cada um mantem seu próprio padrão
 - Big Ball of Mud: grande sistema que precisa ser lidado no dia a dia

 -  https://github.com/ddd-crew/context-mapping