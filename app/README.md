# App for testing Re:Form

## Development

For development purposes, you will need to link Re:Form package (after building it). After which, you can navigate into the root directory of the `app` and link the library. After linking, whenever a change is made in the library, you can just rebuild and it should update `node_modules` of `app`.

### Steps

```bash
# In root directory

npm run build
npm link

cd app
npm link @btdtech/reform
```