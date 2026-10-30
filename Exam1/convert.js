import {
  readFileSync,
  writeFileSync,
} from "node:fs";
import { marked } from "marked";

const markdown =
  readFileSync(
    new URL(
      "./07_clean_code.md",
      import.meta
        .url,
    ),
    "utf8",
  );

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>07 - Clean Code</title>
  </head>
  <body>
${marked.parse(markdown)}
  </body>
</html>
`;

writeFileSync(
  new URL(
    "./07_clean_code.html",
    import.meta
      .url,
  ),
  html,
);
console.log(
  "Created 07_clean_code.html",
);
