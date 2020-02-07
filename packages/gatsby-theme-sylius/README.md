# gatsby-theme-sylius

A Gatsby theme plugin to generate a shop from Sylius via the [ShopApiPlugin](https://github.com/Sylius/ShopApiPlugin).

Internally, it uses the `gatsby-source-sylius` for sourcing the data

## Install

```
npm install --save gatsby-theme-sylius
```

# How to use

```javascript
// In your gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-sylius`,
      options: {
        syliusUrl: `https://{{your-sylius-url}}`,
      },
    },
  ],
};
```

## Options

You can use all the [`gatsby-source-sylius` options](../gatsby-source-sylius/README.md#Options).
