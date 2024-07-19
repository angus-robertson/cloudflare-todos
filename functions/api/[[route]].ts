import { handle } from "hono/cloudflare-pages";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello, Cloudflare Pages!" });
});

app.all("*", (c) => c.json({ error: true }));

export const onRequest = handle(app);
