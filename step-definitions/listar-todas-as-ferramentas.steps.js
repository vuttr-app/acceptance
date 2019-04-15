import { Given, When, Then } from 'cucumber'
import { client } from 'nightwatch-api'
import fs from 'fs'

Given('que existe uma ferramenta', async () => {
  const content = JSON.stringify({ tools: [{ "title": "Ferramenta 1" }] })
  console.log(content)
  await fs.writeFile('/ws/api/db.json', content, (error) => {
    if (error) {
      return console.error(error)
    }
    console.log()
  })
})

When('eu solicito a lista de todas as ferramentas', async () => {
  const url = 'http://172.21.1.3:4200'
  await client
    .url(url)
})

Then('eu verifico que a lista apresentada possui uma ferramenta', async () => {
  await client
    .waitForElementPresent(`//*[@data-set='ferramenta']`)
})
