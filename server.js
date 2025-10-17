// server.js

import { serveFile, serveDir } from "jsr:@std/http/file-server";

const PORT = 4242;

async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Root -> returnera HTML
  if (path === "/" || path === "/aggsperten.html") {
    return serveFile(request, "aggsperten.html");
  }

  // Serva statiska filer från projektroten
  return serveDir(request, {
    fsRoot: ".",       // <- projektroten
    urlRoot: "",
    quiet: true,
  });
}

Deno.serve({ port: PORT }, handler);