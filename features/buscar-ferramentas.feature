# language: pt
Funcionalidade: Buscar ferramenta

  @doing
  Cenário: Globalmente
      Dado que existe mais que uma ferramenta
    Quando eu procuro por uma ferramenta específica
     Então eu verifico que a lista apresentada possui uma ferramenta

  Cenário: Usando tags
