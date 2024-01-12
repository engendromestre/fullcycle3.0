# Introdução

 - Se dedicir usar o DDD não se sai colocando a mão no código, primeiro é necessário entender a complexidade do software, mapear o domínio, criar uma linguagem universal, criar os contextos (bounded contexts), separar o espaço dos problemas e soluções e depois de tudo isso pronto com os elementos estratégicos definidos, a próxima etapa é ir para a parte tática.
 - O maior erro que um dev pode cometer é trabalhar com DDD e começar direto com a parte tática.

 # Resignificando conceitos

  - há uma história de um esperimento onde colocaram em uma jaula 5 macaquinhos nessa jaula, colocaram uma escada em cima um cacho de banana.
  Um macaquinho subiu e tentou pegar uma banana do cacho. Quando o macaquinho comeu a banana foi jogado um jato de água bem gelada nos outros 4 macaquinhos.
  Ai um outro macaquinho subiu na escada, quando comeu a banana, jato nos outros macaquinhos.
  Quando todos perceberam que sempre quando algum deles tentava pegar uma banana, eles começaram a bater em quem tentasse subir a escada para comer uma banana.
  Ai tiraram um macaquinho dos 5 e colocaram um outro, e quando este tentou subir para pegar uma banana, ele tomou uma surra.
  Ai outro tentou e tomou uma surra.
  Até que trocou todos os macaquinhos da jaula onde todos nunca tomaram um jato de água.
  Só que se quando o último macaquinho trocado tentou subir a escala, levou uma surra, mesmo que nenhum dos outros 4 tivessem levado um jato de água.

  - Em muitos aspectos agimos como esses macaquinhos. Quando começamos a programar, aprendemos orientação a objetos, depois sobre particularidades de uma linguagem, é inserido em um projeto, e acaba fazendo um mapeamento objeto-relacional com um banco de dados qualquer. O grande ponto aqui é que como a gente aprendeu de uma forma, provavelmente a pessoa que nos ensinou talvez também nem sabe de onde isso veio, pois foi ensinada do mesmo jeito. O que ele sabe é que para conseguir mapear dados e armazenar no banco de dados ele precisa fazer do jeito que foi passado.
 - Ao estudar DDD a fundo muitas coisas são resignificadas. Por exemplo, o que realmente significa uma entidade. É o que será visto a seguir. 

 # Elementos táticos
 - Primeiro há o olhar estratégico: foi entendido o problema (domain), foi entendido a solução, foi criado uma mapa de contextos, se definiu diversos contextos delimitados, ou seja, limites em cada área, temos diversos subdomínios que foram criados, e cada um dessses contextos ou subdomínios tem um problema para ser resolvido. É nesse momento que se faz necessário ter elementos táticos que auxiliarão a resolver os problemas que acontecem dentro do nosso bounded context.
 - Elemento tático: É quando estamos falando sobre DDD e precisamos olhar mais a fundo um bouded context. Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações. Aqui os elementos são individualizados, ou seja, eles tem a sua própria identidade e vão conseguir relacionar um com o outro. Esses elementos possuem comportamentos que refletem as regras de negócio extraídos do domain expert, levantando os eventos que o sistema acaba gerando, etc.  

 # Entidades (Entities)
  - Uma entidade é algo ÚNICO que é capaz de ser alterado de forma contínua durante um longo período de tempo. (Vernon, Vaughn. Implementing Domain-Driven Design. Também pode ser definido como uma entidade que possua uma continuidade em seu ciclo de vida e pode ser distinguida independentemente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancária (Evans, Eric. Domain-Driven Desing (p. 91))
  Entidade = IDENTIDADE ...  A principal característica de uma Entidade é a sua indetidade única, que você consegue distiguir das outras entidades. Posso ter 2 fuscas, porém um é diferente do outro.