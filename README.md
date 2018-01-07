# react-progressive-component

> 
![license][license-badge]

## Example

- https://jf423.github.io/react-progressive-component/

## Installation

```
$ npm install react-progressive-component --save (or yarn add ...)
```

## Usage

### Div


```jsx=
<ProgressiveImg
  src={pic1}
  loader={small_pic1}
  loaderStyle={'min-width: 100vw;height: 100vh;'}
>
    <div
      style={{
        minWidth: '100vw', height: '100vh',
        background: `url(${pic1}) center center / cover no-repeat`
      }}
    />
</ProgressiveImg>
```

### Img

```jsx=
<ProgressiveImg
  src={pic2}
  loader={small_pic2}
  loaderStyle={'width: 100vw'}
>
  <img
    src={pic2}
    style={{ width: '100vw' }}
  />
</ProgressiveImg>
```

## Property

| **Prop**      |  **Type** |  **Required**  |  **Default** | **Description** |
| ------------- | --------- | -------------- | ---------------- | --------- |
| `src`         | string    | yes            | ------|Origin image     |
| `loader`      | string    | yes            | ------|Compress image   |
| `loaderStyle` | string    | option             | filter: blur(10px); |The style of the loader. |


## CONTRIBUTING

All contributions and stars are super welcome!
Please feel free to pull request.

## LICENSE

MIT

[license-badge]: https://img.shields.io/npm/l/react-progressive-bg-image.svg?style=flat-square