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
    try {
      await this.browser
        .click(`//*[@action-trigger='nova']`)
        .setValue(`//*[@data-input='title']`, 'Título da Ferramenta')
        .click(`//*[@action-trigger='adicionar']`)
    } catch (error) {
      throw new Error(`
        Ocorreu um erro enquanto tentava adicionar uma ferramenta.
        ${JSON.stringify(error)}
      `)
    }
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


