# Avançando com Testes

- Quando o desenvolvimento começa a ter um nível maior de complexidade, e podemos perder tempo com o que não varia a pena.
- Além disso, muito do que é preciso testar, será preciso criar comportamentos como os escritos no arquivo main.ts
- Vamos configurar o sistema para trabalhar com testes
- Os testes automatizados além de nos ajudar a guiar todo o desenvolvimento, ele vai garantir que, coforme a gente for alterando código não seja quebrada coisas que já estejam funcionando.

# Preparando o ambiente com  testes

 - Test Runner Jest em TypeSript
 ```bash
npm i -D jest @types/jest ts-node --save-dev
 ```

- SWC (Vercel): basicamente é u compilador feito em Rust que consegue compilar mais rapidamente todo o código TS para JS
 ```bash
npm i -D @swc/jest @swc/cli @swc/core
 ```

 - Fazer a inicialização do Jest. Para que ele crie o arquivo de configuração para preparar melhor o nosso ambiente.
  ```bash
npx jest --init
 ```

 ```bash
✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
 ```

 - No arquivo jest.config. Vamos adicionar uma expressão regular que está dizendo o seguinte: peque todos os arquivos que podem ser ts ou js tendo opcionalmente o x no final. Essa cara aqui vai utilizar o swc e o jest para rodar os testes, deixo o processo de rodar testes muito mais rápido.
```bash
 transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
 ```
 - Package.json foi configurado automaticamente para rodar os testes com o Jest
 - Essas configurações permitem rodar o seguinte comando de testes:
 ```bash
npm test
 ```
 - cada entidade pode ter seu arquivo de testes. A convenção de nomes do Jest é entidade.spec.ts
 