import { defineController } from './$relay'

const urlSplitter = (url: string): string => {
  let id = url.split('v=')[1].split('&')[0]

  if (id) {
    const ampersandPosition = id.indexOf('&')
    if (id.indexOf('&') != -1) {
      id = id.substring(0, ampersandPosition)
    }
  }

  return id
}
export default defineController(() => ({
  get: ({ query }) => ({ status: 200, body: urlSplitter(query.url) })
}))
