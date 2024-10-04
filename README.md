# decode-named-character-reference worker bug

This demonstrates a bug with how the `decode-named-character-reference` package is loaded in a worker in Webpack.

## Usage

1. Clone repo
2. Install: `npm install`
3. Build: `npm run build`
4. Serve: `npm run serve`

The `serve` command will show the localhost where the app is running. Open it in a browser and open the browser devtools. You'll see two messages:

1. `Remark on main thread: <h1>Hello, Neptune!</h1>` This is Remark running successfully on the main thread.
2. `Uncaught (in promise) ReferenceError: document is not defined` This is Remark failing to run on a Worker thread.

The root cause seems to be the `package.json` `exports` configuration in the `decode-named-character-reference` package here: https://github.com/wooorm/decode-named-character-reference/blob/main/package.json#L36