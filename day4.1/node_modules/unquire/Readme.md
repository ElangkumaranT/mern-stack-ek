# unquire

This is a very simple `require()` polyfill for browsers that loads packages from
<https://unpkg.com/>.

It supports simple packages only and doesn't work for generic ones — the main
intention was to be able to launch up-to-date library demo sites on GitHub Pages
without having to re-build the bundle after every update.

## How does it work?

First, it statically analyzes the code for `require` presence and recursively
loads the `require`-d files from <https://unpkg.com/>, asynchronously.

Then, it dynamically evaluates modules code, providing a synchronous `require()`
implementation using the pre-loaded files.

If some deps names are computed dynamically — those are loaded synchronously at
the dynamic evaluation step. Dynamic evaluation does not support loading new
packages, only files with full or relative paths.

## Caveats

* Most of Node.js API is not supported (some could be loaded from ecosystem).
* Dynamic `require()` arguments are supported only partially.
* Only latest versions of packages are loaded by default.
* This loads packages from a thirdparty CDN.
* `css` files are not loaded, you have to specify them manually.

Not recommended to use this in production — the main intention of this package
is make building GitHub Pages demo sites easier, without having to bundle stuff.

## How to use?

Most simple setup:

```html
…
  <script defer src="https://unpkg.com/unqire@1"></script>
</head>
<body data-require-main="./main.js">
…
```

The libary registers a single global `require` function, so, alternatively,
`require.async('./main.js')` could be used (returns a `Promise`).

`require('./main.js')` also works, but without preloading it would try to load
the deps synchronously (which doesn't support loading packages by their names).
You should avoid doing that from your top-level code.

The above affects only the entry point —  inside `./main.js` (and other
`require()`-d code), use synchronous `require()` as usual — file loads will be
done asynchronously.

Also, you can specify a specific version or version range when loading a
package, e.g. `require('codemirror@5')`.
