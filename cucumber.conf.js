import { setDefaultTimeout, AfterAll, BeforeAll } from 'cucumber'
import { createSession, startWebDriver, stopWebDriver } from 'nightwatch-api'

setDefaultTimeout(60 * 1000)

BeforeAll(async () => {
  await startWebDriver({ env: process.env.browser || 'firefox' })
  await createSession()
})

AfterAll(async () => {
  await stopWebDriver()
})
