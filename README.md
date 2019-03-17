# @karolisram/consistent-vh-units

Mobile browsers suffer from inconsistent calculation of `vh` units. This package partly alleviates the problem. The idea is based on the article [https://css-tricks.com/the-trick-to-viewport-units-on-mobile/](The trick to viewport units on mobile).

## Install

### npm

```
$ npm install @karolisram/consistent-vh-units
```

### yarn

```
$ yarn add @karolisram/consistent-vh-units
```

## Usage

### ES6 modules

```js
import '@karolisram/consistent-vh-units';
```

### CommonJS

```js
require('@karolisram/consistent-vh-units');
```

Once you have the module imported, you can use custom `--vh` variable to assign an element's height.
If CSS variables and `calc` are suppoted by the browser, the `--vh` unit will be used to calculate an element's height.
In case of a fallback scenario, regular `vh` units will get used.

### CSS3

```css
.element {
  height: 100vh; /* Fallback for browsers that do not support CSS variables */
  height: calc(var(--vh, 1vh) * 100);
}
```
