/*
 * Generics (<T>) - isso é uma forma de deixar a interface a mais genérica possível onde da pra explicitar qual é o tipo (<T>) dessa interface
 * onde ela está sendo representada por "T".
 * No final das contas, o T serão os nossos apregados
 */
export default interface RepositoryIterface<T> {
  // definir os métodos (assinaturas) da interface
  /*
   * Todo repositório precisa ter o método create
   * esse método vai receber uma entidade do tipo T
   * vai retornar uma Promise (Promessa) pois vamos trabalhar de forma assincrona de T
   * Aqui quando estamos criando algo, por exemplo um produto, ele já está na memória e quero persistir no banco de dados.
   * Faz sentido esse create retornar esse produto sendo que eu já tenho o próprio produto comigo em memória?
   * Não! Será muito raro a ocasião onde precisa fazer com que um método que esteja sendo trabalhado, você precise retornar ele mesmo.
   */
  create(entity: T): Promise<void>; // não vai retornar nada pois eu já tenho a entidade na mão
  update(entity: T): Promise<void>;
  find(id: string): Promise<T>; // seleciona o objeto pelo id e neste caso retorna o próprio objeto
  findAll(): Promise<T[]>;
}
