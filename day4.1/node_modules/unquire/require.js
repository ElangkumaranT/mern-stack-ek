'use strict';

/* This is a very simple require() polyfill that will load some packages from
 * unpkg.com. It doesn't support all packages, just some most simple cases.
 * That is enough to load simple demos (e.g. for GitHub pages) without updating
 * them too often and without having to rebuild the bundle after each change.
 */

function require(path, base = './') {
  if (require.blacklisted.includes(path)) {
    console.error(`Blacklisted: ${path}`);
    return {};
  }
  path = require.normalizePath(path, base);
  if (require.cache.has(path)) {
    return require.cache.get(path);
  }
  const { text } = require.getSync(path);
  const module = { exports: {} };
  require.cache.set(path, module.exports); // For cyclic deps
  try {
    if (path.endsWith('.json')) {
      module.exports = JSON.parse(text);
    } else {
      const keys = Object.keys(require.globals);
      const values = keys.map(key => require.globals[key]);
      const require_wrap = next => require(next, path);
      const wrap = new Function('require', 'module', 'exports', ...keys, text);
      wrap(require_wrap, module, module.exports, ...values, module.exports);
    }
  } catch (e) {
    console.error({ path, text });
    throw e;
  }
  require.cache.set(path, module.exports);
  return module.exports;
}

require.cdn = 'https://unpkg.com/';
require.cache = new Map();
require.got = new Map();
require.paths = new Map();
require.blacklisted = ['https', 'fs'];
require.pkgmap = { // Not useful atm
  http: 'stream-http', crypto: 'crypto-browserify', fs: 'browserify-fs',
  'util/': 'util'
};
require.globals = { global: window, process: {}, Buffer: Uint8Array };

require.normalizePath = function(path, base = './') {
  path = require.pkgmap.hasOwnProperty(path) ? require.pkgmap[path] : path;

  // Unwrap base
  while (require.paths.has(base))
    base = require.paths.get(base);

  // Resolve to base path
  if (/^(https?:)?\/\//.test(path)) {
    // it's resolved already
  } else {
    if (path.startsWith('./') || path.startsWith('../'))
      path = `${base.replace(/\/[^/]*$/, '')}/${path.replace(/^.\//, '')}`;
    else
      path = `${require.cdn}${path}`;
    // Appending '.js' is needed only for local files, unpkg does that better
    if (!path.startsWith(require.cdn) && !/\.(js|json)$/.test(path))
      path = `${path}.js`;
  }

  // Normalize paths
  const upwards = /\/[^/]+\/..\//;
  while (upwards.test(path))
    path = path.replace(upwards, '/');

  // Unwrap redirects
  while (require.paths.has(path))
    path = require.paths.get(path);

  return path;
}

require.get = async function(path) {
  path = require.normalizePath(path);
  if (require.got.has(path))
    return require.got.get(path);
  let text = sessionStorage.getItem(`require:text:${path}`);
  if (!text) {
    const res = await fetch(path);
    if (res.url !== path) {
      require.paths.set(path, res.url);
      path = res.url;
    }
    text = await res.text();
    if (path.startsWith(require.cdn)) {
      if (!/\.(js|json)$/.test(path)) {
        path = `${path}.js`; // Not redirected
        require.paths.set(res.url, path);
      }
      // Note: don't dedupe this with the key above, `path` could have changed
      sessionStorage.setItem(`require:text:${path}`, text);
    }
  }
  const entry = { path, text };
  require.got.set(path, entry);
  return entry;
}

require.getSync = function(path) {
  path = require.normalizePath(path);
  if (require.got.has(path))
    return require.got.get(path);
  // Should be unused if preloading works, supports only paths without redirects
  const req = new XMLHttpRequest();
  req.open('GET', path, false);
  req.send();
  const entry = { path, text: req.responseText };
  require.got.set(path, entry);
  return entry;
}

require.preload = async function(...paths) {
  const queue = [paths];
  while (queue.length > 0) {
    const block = queue.shift();
    if (block.length > 5) queue.unshift(block.splice(5));
    const promises = block.map(require.get);
    const entries = await Promise.all(promises);
    const next = [];
    for (const { text, path } of entries) {
      const regex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
      let match;
      while (match = regex.exec(text)) {
        if (require.blacklisted.includes(match[1])) continue;
        const spec = require.normalizePath(match[1], path);
        if (require.got.has(spec)) continue;
        next.push(spec);
      }
    }
    if (next.length > 0) queue.push(next);
  }
}

require.async = async function(path) {
  await require.preload(path);
  return require(path);
}

window.addEventListener('DOMContentLoaded', function () {
  const main = document.body.dataset.requireMain;
  if (main) {
    require.async(main).catch(e => console.error(e));
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { require, launch };
}
