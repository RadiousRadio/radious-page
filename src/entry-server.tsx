// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="h-full antialiased">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#070911" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          {assets}
        </head>
        <body class="min-h-full">
          {/* scroll-reveal styles only engage when JS is present, so
              no-JS visitors and crawlers always see full content */}
          <script innerHTML={'document.documentElement.classList.add("js")'} />
          <div id="app" class="min-h-dvh flex flex-col">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
