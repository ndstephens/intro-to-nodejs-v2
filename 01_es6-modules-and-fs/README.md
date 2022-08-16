# Using ES6 Modules and `fs`

## Using ES6 Module syntax in Node

### File extension options:

#### .mjs

- Simply use the `.mjs` file extension instead of `.js`

#### .js

- `package.json` needs to be updated:

```json
{
  ...
  "type": "module"
}
```

- Imports will require the file extension for `.js` or `.ts` files

```js
import foo from './bar.js';
```

### `__dirname` and `__filename`

- When using ES6 Modules you no longer have access to `__dirname` and `__filename`.
- You'll have to use the `URL` global that takes a `relative path` and a `base path` and will create a `URL object` that is accepted by commands such as `readFile`.
- There are multiple ways to handle this...I created a simple utility function:

```js
const getPath = (relFilePath) => new URL(relFilePath, import.meta.url);
```

---

## `fs` as a Promise

- Import as:

```js
import { readFile } from 'fs/promises';
```

- If you imported from just `'fs'` then you'd need to use it with a `callback function`.
