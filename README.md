# TagsCloud

Pavel Ninitinskiy's implementation of frontend

## Run

Install dependencies
```shell
npm install
```

Development mode with hot reload
```shell
npm start
```

## Test

Execute a command
```shell
npm run test
```

## Generate components

First, follow this [instruction](https://github.com/SpencerCDixon/redux-cli#quick-start) to install `redux-cli`.

Generate a dumb component:
```shell
redux g dumb Component
```

Generate a smart component:
```shell
redux g smart Component
```

Generate a screen:
```shell
redux g screen Component
```

## Styleguide
We have `react-styleguidist` set up in our app. After you have generated a component with `redux-cli` just run
```shell
npm run styleguide
```
and open `http://localhost:6060/` to start developing your component in a sandbox with hot reload.
