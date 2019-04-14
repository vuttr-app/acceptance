# language: pt
Funcionalidade: Listar Todas as Ferramentas

  Cenário: Principal
      Dado eu sou um usuário
         E que existe uma ferramenta
    Quando eu solicito a lista de todas as ferramentas
     Então eu verifico que a lista apresentada possui uma ferramenta
