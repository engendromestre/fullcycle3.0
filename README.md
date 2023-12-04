# Introdução ao Gitflow

Qual problema que o gitflow resolve?
 - Hoje em dia quando estamos trabalhando em produção com grandes produtos de software, estamos lidando com vários commits, vários pull requests, muitos usuários trabalhando ao mesmo tempo, as coisas podem ficar um pouco caóticas. O software pode ter vários branches. Você não sabe se é uma branch nova, uma correção de alg, se ela já terminou de desenvolver ou está em desenvolvimento, se o que está no master é mesmo o que está em produção ou se existe um branch de desenvolvimento.

 o Gitflow além de ser uma metodologia ele também pode ser uma extensão que você instala no seu Git.

 O que está no branch master é o que normalmente está em produção. Então dar um commit direto no master, um push direto no master não é uma boa prática.
 O master também não é um local onde você vai consolidar todas as features. Um branch auxiliar para que, quando tudo estiver pronto nesse branch ai sim você vai jogar para o master. Um branch chamado Developer entra na jogada. tudo que for fazendo nesse branch,será abregado depois.
 A cada feature desenvolvida, será criado um branch específico para a feature e, quando o desenvolvimento da feature acabar, será dado um merge na branch developer.

 No dia-dia entram outras questões como: e se eu tiver um bug pra corrigir? Bug não é uma nova feature. E um bug geralmente se percebe quando essa feature está na master em produção. E como resolver um problema que está na master e também no developer?

 Antes de colocar qualquer coisa na master, temos uma outra branch de entrega (release). Nesse branch de release será gerado uma tag e depois fazer um merge na master.

 No meu dia-dia, tudo que for sendo consolidado, vai sendo jogado na branch developer. Quando estiver terminando um sprint ou qualquer coisa do tipo, eu posso separar aquelas funcionalidades e colocar em um branch de release. Isso faz que não seja parado de colocar coisas na branch developer, mas a release está separada. Uma vez com a release separada, pode ter uma equipe de testes para verificar se tem algo para corrigir, e se tiver tudo ok, posso dar um merge, gerar um tag e vai para o master.

 Enquanto estiver com o release eu posso ter novas funcionalidades, que não quero naquele momento subir para testes e produção.

 Temos também a branch hotfix. Encontro um erro em produção, todavia tudo que está no develop também deve estar em produção, pois ela deve ser um espelho do que está na branch master mais as features novas sendo desenvolvidas. Então quando for encontrado em bug em produção, será criado um branch de hotfix. Esse branch vai resolver um problema que está em produção e automaticamente será dado um merge no master e também no developer. O
 
 O developer e o master devem estar sincronizados, pois não adianta resolver um problema só no master e no develop esse erro não estar corrigido. Corrigido o erro, vai para a release e depois para a produção novamente.

Temos também a branch support. A ideia dela é ter duas branches em produção. Uma versão 1.0 para dar suporte e uma 2.0 para estar mantendo por exemplo.

-> git flow init

-> git branch

* develop
main

Após a configuração de início do git flow, somente as 2 branches são criadas.
 
a letra q (quit) sai da exibição das branches.

~/p/f/3git-gifflow  on   develop ?1 ▓▒░ git flow feature start welcome

verifica se há algo a ser entregue (commit)
-> git status

depois que for entregue, verifica o log dos arquivos
-> git log

Gerando um release, ou seja, tenho as entregas das features na develop e estou querendo passar para a produção.

-> git flow release start 0.1.0

Nessa opção podemos trocar a versão da release

E adicionar novos commits vindos da branch develop

Ao adicionar uma nova feature, ao finalizar não temos a informação dessa feature na release por meio do git log, pois ela ainda pode estar sendo preparada e sofrendo novas atualizações.

Aqui temos tanto no branch develop rodando a funcionalidade de contato que foi desenvolvida e no release não tem essa funcionalidade contato, sendo eles separados nesse ponto.
Vamos por em produção!

-> git flow release finish 0.1.0

Nesse ponto o git flow está dando uma marge da release para o master e também para o develop, pois fora modificado um arquivo que estava na branch release (index.html) e também sendo adicionada a feature contact.html na branch develop.

Mostra as tags geradas
-> git tag

Vamos imaginar que deu um problema em produção

