### :boom: Careful: This package is no longer maintained and is only here for historic reasons. This means you should very likely not use it. You have been warned. :boom:

---

# i18next-po-loader

> Load gettext PO files as [i18next](http://i18next.com/) format directly in webpack

## Install

```bash
npm install i18next-po-loader --save-dev
```

## Webpack config

```js
{
  test: /\.po$/, 
  loaders: ['i18next-po-loader']
}
```

## Usage

```js
i18next.init({
  nsSeparator: false,
  keySeparator: false,
  lng: 'en',
  resources: {
    de: {translation: require('./translations/de.po')}
  }
})
```
