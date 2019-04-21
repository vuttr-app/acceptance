# language: pt
Funcionalidade: Adicionar nova ferramenta

  @doing
  Cenário: Não existem ferramentas
      Dado que não existem ferramentas
    Quando eu solicito a adição de uma nova ferramenta
     Então eu verifico que a lista apresentada possui uma ferramenta

  Cenário: Existe uma ferramenta
  Cenário: Existe mais que uma ferramenta
