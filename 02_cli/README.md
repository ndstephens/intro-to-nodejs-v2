# Create a CLI Command (program)

## Interpreter

```js
#! /usr/bin/env node
```

- That `hashbang` tells the machine where to find the `interpreter`, which is Node.
- I believe it works b/c `PATH` is in the `env` and somewhere in the path it'll find Node (since Node's path location can/will be different on different machines depending on how it was installed).

---

## package.json

- Register our new command (CLI) in the `bin` folder.
  - This instructs `npm` to do that (install our command in the user's `bin` folder) when a user uses `npm` to globally install our command.
- Need to tell Node.js what the `name` of our CLI is so when can actually use it in our terminal. Just have to add this section to our package.json:

```json
{
  ...
  "bin": {
    "reddit": "./reddit.mjs"
  }
}
```

- `reddit` is the name of the `CLI`.
- `"./reddit.mjs"` is the path to the entry file for the command's code.
- Once installed, this package will have its `bin` command installed into your machine's `bin` folder allowing us to use the `reddit` command.
- All global commands exist in your machine's `bin` directory.
- The `main` property (in package.json) is used when someone is `importing` your package (using `import` or `require`) into their project's code.
  - `bin` is used when your package is `installed` and used as a `CLI`.

---

## Install package locally

- We must install our own package locally so we can test out the CLI. We could just execute the file with the node runtime, but we want to see the CLI actually work.

```sh
npm install -g .
```

- We can simply install with no args (or `.`) which tells npm to install the current director. The `-g` flag means we want to globally install this package vs in a local `node_modules`.

---

## Run command

```sh
# Will log a random post's Title and Link
reddit --print

# Will open that random post in your default browser
reddit
```