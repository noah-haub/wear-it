import { Hono } from 'jsr:@hono/hono';

const functionName = 'generate'
const app = new Hono().basePath(`/${functionName}`)

app.post('', (c) => {
  // Image of person and image of clothing
  // Generate image using ai api
  // Return image url
  return new Response('Image generated!')
});

Deno.serve(app.fetch);