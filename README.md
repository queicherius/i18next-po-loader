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
  loaders: ['i18next-po-loader-bkpr']
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
