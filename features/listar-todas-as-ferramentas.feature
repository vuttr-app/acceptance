# language: pt
Funcionalidade: Listar todas as ferramentas

  Cenário: Não existem ferramentas

  Cenário: Existe uma ferramenta
      Dado que existe uma ferramenta
    Quando eu solicito a lista de todas as ferramentas
     Então eu verifico que a lista apresentada possui uma ferramenta

  Cenário: Existe mais que uma ferramenta
