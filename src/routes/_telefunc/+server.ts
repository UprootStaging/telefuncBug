import type { RequestHandler } from '@sveltejs/kit'
import { telefunc } from 'telefunc'

const GET: RequestHandler = async (event) => {
  const cookies = event.cookies;
  const response = await telefunc({
    url: event.request.url,
    method: event.request.method,
    body: await event.request.text(),
    context: {
      // We pass the `context` object here, see https://telefunc.com/getContext
      cookies,
    },
  })
  return new Response(response.body, {
    headers: new Headers({ contentType: response.contentType }),
    status: response.statusCode,
  })
}

export { GET, GET as POST }
