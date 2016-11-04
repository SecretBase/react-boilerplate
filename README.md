# React Boilerplate
Boilerplate for myself.

Please go and use create-react-app. much better.

### Node

node.js v6.\*+

### Package Manager

- Yarn

### Bundler

- Webpack

### JS

- babel-preset-react-app
- jest for testing

### CSS

- Sass for local style
- Css for global style
- bootstrap as foundation

There should more good way to define global style in css modules.

### Testing

- Jest

Using `identity-obj-proxy` to proxy classname to snapshot.

[Write test for React by using snapshot](http://facebook.github.io/jest/docs/tutorial-react.html#content)

[Jest Webpack tutorial](http://facebook.github.io/jest/docs/tutorial-webpack.html#content)

[identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy)

### Command

| Command        | Description          |
|----------------|:---------------------|
| yarn start     | start development    |
| yarn run test  | stat testing         |
| yarn run build | build for production |

### TODO

- [ ] Webpack config for production.
- [x] Write some tests by using jest for boilerplate reference.
- [ ] Add Flow for static type checking.
- [ ] Add eslint-plugin-jsx-ally.
- [x] Find a good way to separate global and local style in css modules.
- [ ] Common code splitting.
