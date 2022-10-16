# react-snow-particle

> A beautiful react snow flake effects components

[![NPM](https://img.shields.io/npm/v/react-snow-particle.svg)](https://www.npmjs.com/package/react-snow-particle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://firebasestorage.googleapis.com/v0/b/pinboard-25.appspot.com/o/ezgif.com-resize.gif?alt=media&token=12dae8c9-00d1-4fc8-9fff-5f1e8ba3e01d" />

## Install

```bash
npm install react-snow-particle
```

If you are using yarn

```bash
yarn add react-snow-particle
```

## Import

```js
import { Snow } from 'react-snow-particle'
```

## Properties

| Properties      | Default | Description                                                                                      | Type   |
| --------------- | ------- | ------------------------------------------------------------------------------------------------ | ------ |
| height          | 100vh   | The height of the container box                                                                  | string |
| backgroundColor |         | Eg. '#000'. If enable, will display the background color props of thecontainer                   | string |
| backgroundImage |         | Eg. '/public/images/bg1.jpg'. If enable, will show the responsive center style background images | string |
| size            | 11px    | The width and height of the snow particle                                                        | string |
| color           | '#fff'  | The color of the particle                                                                        | string |
| particles       | 300     | The number of particles generated. The maximum is 1000                                           | number |

## Usage

```jsx
import React from 'react'
import { Snow } from 'react-loading-dot'

export const App: React.FC = () => {
  return (
    <div>
      <Snow backgroundImage="https://firebasestorage.googleapis.com/v0/b/pinboard-25.appspot.com/o/ezgif.com-resize.gif?alt=media&token=12dae8c9-00d1-4fc8-9fff-5f1e8ba3e01d" />
    </div>
  )
}
```

## Uninstall

In your project directory, run

```bash
npm uninstall react-snow-particle
```

If you are using yarn

```bash
yarn remove react-snow-particle
```

## ChangeLog

- 2020/06/28 version 1.0.6 publish

## License

MIT © [yang052513](https://github.com/yang052513)
