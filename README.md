# S4DX

## Contents

- [S4DX](#s4dx)
  - [Contents](#contents)
  - [Used Technologies](#used-technologies)
  - [App Icon for IOS & android](#app-icon-for-ios--android)
  - [Setup instructions:](#setup-instructions)
  - [Insall all dependencies](#insall-all-dependencies)
  - [Install ios PODs](#install-ios-pods)
  - [Run the application](#run-the-application)
  - [Available Scripts](#available-scripts)
  - [File Structure](#file-structure)


<img src="/repository/screenshots/screenshot1.png" alt="Login Screen" width="200" /> <img src="/repository/screenshots/screenshot2.png" alt="Home Screen" width="200" /> <img src="/repository/screenshots/screenshot3.png" alt="Order Screen" width="200" />




## Used Technologies

- [TypeScript](https://reactnative.dev/docs/typescript)
- [React Redux](https://react-redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Unit Testing](https://reactnative.dev/docs/testing-overview)
- [Jest](https://jestjs.io)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [React Hooks](https://reactjs.org/docs/hooks-overview.html)
- [ESLint](https://eslint.org/)


## App Icon for IOS & android

- [App icon](https://www.google.com/search?q=s4dx+image&tbm=isch&ved=2ahUKEwjT5peOivT3AhWPaPEDHXQKBJoQ2-cCegQIABAA&oq=s4dx+image&gs_lcp=CgNpbWcQAzIECCMQJzoICAAQgAQQsQM6BQgAEIAEOgQIABATOggIABAeEAUQE1CwBljgFWDRGmgAcAB4AIAB0wGIAeIOkgEFMC45LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=za6KYpPMGY_Rxc8P9JSQ0Ak&bih=754&biw=1536&rlz=1C1SQJL_enEG845EG845#imgrc=QA3_aXaMR1SPvM)

## Setup instructions:


```bash
$ git clone https://github.com/AbanoubAshraaf/SmartForDX.git
```

```bash
$ cd SmartForDX
```

### Insall all dependencies

```bash
$ yarn install
# or
$ npm install

```

### Install ios PODs

```bash
$ cd ios => pod install => cd ..
```

### Run the application

```bash

# for ios
$ yarn ios
# or
$ npm run ios

# for android
$ yarn android
# or
$ npm run android

```

## Available Scripts

**Example**

```bash
$ yarn test
# or
$ npm run test
```

| Name       | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `andorid`  | Run on andorid emulator > the andorid emulator must be pre-starte |
| `ios`      | Run on IOS emulator                                               |
| `test`     | Run and check all test cases                                      |
| `lint:fix` | Run `eslint` and auto fix it                                      |
| `format`   | Prettify code using prettier                                      |

## File Structure

```ts
/**
 *   └── Screens & Components
        ├── ComponentName
        │   ├── index.ts
        │   ├── ComponentName.interface.ts
        │   ├── ComponentName.style.ts
        │   ├── ComponentName.test.tsx
        │   └── ComponentName.tsx
 * /
```

```ts
/**
 *   └── config
        ├── name of config
        │   ├── index.test.ts
        │   └── index.ts
 * /
```

```ts
/**
 *   └── redux
        ├── name
        │   ├── name.interface.ts
        │   ├── nameActions.ts
        │   ├── nameReducer.ts
        │   ├── nameRedux.test.ts
        │   ├── nameSaga.ts
        │   └── index.ts
 * /
```