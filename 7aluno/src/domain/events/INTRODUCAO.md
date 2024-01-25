# Introdução aos Domains Events

- "Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio". Vernon, Vaughn. Implementing Domain-Driven Design.
- "A essência de um evento de domínio é que você o usa para capturar coisas que podem desencadear uma mudança no estado do aplicativo que você está desenvolvendo. Esses objetos de evento são processados para causar alterações no sistema e armazenados para fornecer um Auditlog". Fowler, Martin. Domain Event.
- Todo evento deve ser representado em uma ação realizada no passado:
  - UserCreated
  - OrderPlaced
  - EmailSent

## Quando utilizar

- Normalmente um Domain Event deve ser utilizado quando queremos notificar outros Bounded Contexts () de uma mudança de estado.
- Ex.: Um cliente compra um produto e existe um Bounded Content que só cuida de emissão de nota fiscal na contabilidade. A área financeira precisa saber da compra de um produto para emitir uma nota fiscal. Então quando um OrderPlaced (event) for disparado, aquele Bounded Content que tem interesse nesse evento pode ficar escutando e executar uma determinada operação.

## Componentes

- Event: normalmente ele tem uma data e hora pois representa algo que aconteceu. Também registra o que aconteceu, ou seja, o que ocorreu no momento do disparo do evento. Ex.: o cliente com o nome tal foi mudado para o nome tal.
- Handler: Executa o processamento quando um evento é chamado. Ex.: Um usuário foi criado no sistema. Após ser criado, é enviado uma notificação para que possa ser disparado um e-mail para ser notificado via habbitmq que aquele evento foi criado, que seja chamada uma API externa, que essas informações sejam emitidas para um CRM (Customer Relationship Management). Em outras palavras, o Handler é a ação que acontece após a ocorrência de um evento.
- Posso executar várias ações (Handlers) para serem disparadas após a ocorrência de um evento.
- Event Dispatcher: Responsável por armazenar e executar os handelrs de um evento quando ele for disparado.

## Dinâmica

- Cria um "Event Dispatcher"
- Cria um "Evento"
- Cria um "Handler" para o "Evento"
- Registrar o Evento, juntamente com o Handler no "Event Dispatcher"

- Agora para disparar um evento, basta executar o método "nofify" do "Event Dispatcher". Nesse momento, todos os Handlers registrados no envento serão executados.
