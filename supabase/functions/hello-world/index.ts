import { Hono } from 'jsr:@hono/hono';

const functionName = 'hello-world'
const app = new Hono().basePath(`/${functionName}`)

app.get('', (c) => {
  // Image of person and image of clothing
  // Generate image using ai api
  // Return image url
  return new Response('Hello World!')
});

Deno.serve(app.fetch);