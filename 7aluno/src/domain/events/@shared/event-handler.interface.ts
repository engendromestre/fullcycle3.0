import EventInterface from "./event.interface";

/**
 * No EventHandlerInterface tem um método handle.
 * Esse handle recebe um evento
 * esse evento precisa implementar a interface EventInterface
 * então toda vez que for criado um novo EventHandler, vai precisar ter um método handle que vai receber um evento do tipo T genérico
 * sendo que esse tipo T é um EventInterface e que o valor padrão dele é um EventInterface(EventInterface=EventInterface)
 */
export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
  handle(event: T): void;
}
