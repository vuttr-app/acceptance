import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import Backend from './backend'
import Frontend from './frontend'

let backend = new Backend('/ws/api/.db.json')
let frontend = new Frontend(process.env.APP_URL)

Given('que existe uma ferramenta', async () => {
  backend.registrar({ tools: [ { id: 1, title: 'Ferramenta 1' } ] })
})

When('eu solicito a lista de todas as ferramentas', async () => {
  await frontend.entrar()
})

Then('eu verifico que a lista apresentada possui uma ferramenta', async () => {
  expect((await frontend.ferramentas()).length).to.be.equals(1)
})

Given('que não existem ferramentas', async () => {
  backend.registrar({ tools: [] })
})

Then('eu verifico que nenhuma ferramenta é apresentada', async () => {
  expect((await frontend.ferramentas()).length).to.be.equals(0)
})

Given('que existe mais que uma ferramenta', async () => {
  backend.registrar({
    tools: [
      { id: 1, title: 'Ferramenta 1' },
      { id: 2, title: 'Ferramenta 2' }
    ]
  })
})

Then('eu verifico que mais que uma ferramenta são apresentadas', async () => {
  expect((await frontend.ferramentas()).length).to.be.equals(2)
})

When('eu solicito a adição de uma nova ferramenta', async () => {
  await frontend.entrar()
  await frontend.adicionar()
})

Then('eu verifico exatamente três ferramentas são apresentadas', async () => {
  expect((await frontend.ferramentas()).length).to.be.equals(3)
})

When('eu solicito a remoção de uma nova ferramenta', async () => {
  await frontend.entrar()
  await frontend.remover()
})
