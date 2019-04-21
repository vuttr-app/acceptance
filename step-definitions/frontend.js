import { client } from 'nightwatch-api'

export default class Frontend {
  constructor (url) {
    this.url = url
    this.browser = client
  }

  async entrar () {
    await this.browser.url(this.url)
  }

  async adicionar () {
    await this.browser
      .click(`//*[@action-trigger='nova']`)
      .setValue(`//*[@data-input='title']`, 'Título da Ferramenta')
      .click(`//*[@action-trigger='adicionar']`)
  }

  async remover () {
    await this.browser
      .click(`//*[@action-trigger='remover']`)
  }

  async procurar (criterio) {
    await this.browser
      .setValue(`//*[@data-input='criterio']`, criterio)
  }

  async ferramentas () {
    let result
    await this.browser
      .elements('xpath', `//*[@data-set='ferramenta']`, (outcome) => {
        result = outcome.value
      })
    return result
  }
}


