# Entendendo Domain Services

- A service in the domain is a stateless operation that fulfills a domain-specific task. Oftn the best indication thtat you should create a Service in the domain model is when the operation you need to perform feels out of palce as a method on an Aggregate(10) or a Value Object(6). (Vernon, Vaughn. Implementing Domain-Driven Design)
 - Um serviço de domínio é uma operação sem estado que cumpre uma tarea específica do domínio. Muitas vezes, a melhor indicação de que você deve criar um serviço no modelo de domínio é quando a operação que você precisa executar parece não se encaixar como um método em um agregado(10) ou um objeto de valor(6).
 - Muitas vezes é necessário realizar uma operação no nosso modelo de domínio. Porém as vezes que colocar um método na sua Entidade em um agregado ou em um Objeto de Valor, o método que precisa ser implementado não faz sentido estar naquele contexto, ou até mesmo faça sentido mas ele precise de um outro agregado para realizar uma operação. Esse é um indicativo que é preciso de um Serviço de Domínio.

 ## Domain Services

  - Quando um processo ou transformação significativa no domínio não for uma responsabilidade natural de uma ENTIDADE ou OBJETO DE VALOR, adicione uma operação ao modelo como uma interface autônoma declarada como um SERVIÇO. Defina a interface baseada na linguagem do modelo de domínio e certifique-se de que o nome da operação faça parte do UBIQUITOUS LANGUAGE. Torne o **SERVIÇO sem estado**. (Evans, Eric. Domain-Driven Design (p. 106))
  - Um serviço de domínio é um serviço que roda na camada de domínio, nas regras de negócio
  - Como posso ver que uma ação não se enquadre em uma entidade?
   - Uma entidade pode realizar uma ação que vai afetar todas as entidades?
   - Como realizar uma operação em lote?
   - Como calcular algo cuja as informações constam em mais de uma entidade?

## Domain Services: Cuidados

 - Quando houver muitos Domains Services em seu projeto, TALVEZ, isso pode indicar que seus agregados estão anêmicos.
 - Domain Services são Stateless

# Definindo nosso ProductService

 - Vamos imaginar que nós temos uma lista de produtos. De repente, necessito aumentar o preço desses produtos de uma vez. Posso até implmentar um método changePrice, porém na entidade Product ele só vai mudar o preço do produto atual.
 - Para resolver esse tipo de problema, vamos criar um Domain Service
   - Em src, vamos criar uma pasta service
   - dentro da pasta, vamos criar o order.service.spec.js
 - Vamos criar primeiro o teste (TDD)
 - Os métodos de um Domain Sercice não precisam guardam estado pois simplesmente executam uma operação.
 - Vamos imaginar que estão lidando com uma loja virtual com 1 milhão de produtos. Você concorda que não faz o menor sentido de em fazer um select no banco trazendo todos os produtos em memória, passar um a um no laço de repetição alterando o valor em 10% e depois percistir novamente todas essas mudanças uma a uma novamente.
 - Aqui devemos evitar o puritanismo, os extremos onde dependendo da regra de negócio é uma situação atômica onde há uma iteração em larga escala em CONJUNTO COM O BANCO DE DADOS. Neste caso vale a pena criar uma rotina de banco de dados e rodar um único update no banco de dados.

 # Definindo OrderService

  - Vamos pegar o total de todas as Orders geradas.

# Definindo políticas de Reward

 - Vamos ver situações em que, ao se trabalhar com Domain Service vai afetar um outro agregado. Tudo que foi feito até então foi cálculo dentro de um agregado, atualizações em lote dentro do mesmo agregado, mas como trabalhar com agregados diferentes?
 - Dentro de Order, toda vez que um cliente contratar no sistema ele ganha pontos extras. Fazer uma lógica de ganho de ponto é algo bem simples. Porém essa operação depende da compra de um Cliente (Customer), de um agregado que vai trabalhar com Order e também vai depender de um agregado de Customer.
 - Feitos: uma criação em lote, uma consulta em lote a criação que dependia de 2 agregados

 # Testando regra de reward points

 - Se pensar bem o reward points também é de responsabilidade do Customer. O Customer também precisa ser validado. Como eu garanto que quando um Customer é novo a propriedade reward começa com zero? Como eu garanto que quando for adicionado reward points ele está realmente adicionando?